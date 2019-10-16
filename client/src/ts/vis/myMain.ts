import * as d3 from 'd3';
import * as _ from "lodash"
import * as R from 'ramda'
import * as tp from '../etc/types';
import '../etc/xd3'
import {BertAPI} from '../api/bertApi'
import {UIConfig} from '../uiConfig'
import {TextTokens, LeftTextToken, RightTextToken} from './TextToken'
import {AttentionHeadBox, getAttentionInfo} from './AttentionHeadBox'
import {AttentionGraph} from './AttentionConnector'
import {CorpusInspector} from './CorpusInspector'
import {TokenWrapper, sideToLetter} from '../data/TokenWrapper'
import {AttentionWrapper, makeFromMetaResponse} from '../data/AttentionCapsule'
import {SimpleEventHandler} from '../etc/SimpleEventHandler'
import {CorpusMatManager} from '../vis/CorpusMatManager'
import {CorpusHistogram} from '../vis/CorpusHistogram'
import {FaissSearchResultWrapper} from '../data/FaissSearchWrapper'
import {D3Sel, Sel} from '../etc/Util';
import {from, fromEvent, interval} from 'rxjs'
import {switchMap, map, tap} from 'rxjs/operators'
import {BaseType} from "d3";
import {SimpleMeta} from "../etc/types";
import ChangeEvent = JQuery.ChangeEvent;


function isNullToken(tok: tp.TokenEvent) {
    const isSomeNull = x => {
        return (x == null) || (x == "null")
    }
    const tokIsNull = tok == null;
    const tokHasNull = isSomeNull(tok.side) || isSomeNull(tok.ind)
    return tokIsNull || tokHasNull
}

function showBySide(e: tp.TokenEvent) {
    // Check if saved token in uiConf is null
    if (!isNullToken(e)) {
        const classSelector = e.side == "left" ? "src-idx" : "target-idx";

        Sel.setHidden(".atn-curve")
        Sel.setVisible(`.atn-curve[${classSelector}='${e.ind}']`)
    }
}

function chooseShowBySide(savedEvent: tp.TokenEvent, newEvent: tp.TokenEvent) {
    if (isNullToken(savedEvent)) {
        showBySide(newEvent)
    }
}

function chooseShowAll(savedEvent: tp.TokenEvent) {
    if (isNullToken(savedEvent))
        Sel.setVisible(".atn-curve")
}

function unselectHead(head: number) {
    const affectedHeads = d3.selectAll(`.att-rect[head='${head}']`);
    affectedHeads.classed("unselected", true)
}

function selectHead(head: number) {
    const affectedHeads = d3.selectAll(`.att-rect[head='${head}']`);
    affectedHeads.classed("unselected", false)
}

function setSelDisabled(attr: boolean, sel: D3Sel) {
    const val = attr ? true : null
    sel.attr('disabled', val)
}

export class MainGraphic {
    api: BertAPI
    uiConf: UIConfig
    attCapsule: AttentionWrapper
    tokCapsule: TokenWrapper
    sels: any                           // Contains initial d3 selections of objects
    vizs: any                           // Contains vis components wrapped around parent sel
    eventHandler: SimpleEventHandler    // Orchestrates events raised from components

    constructor() {
        this.api = new BertAPI()
        this.uiConf = new UIConfig()
        this._mainInit();
    }

    /**
     * Get the attentions present in uiConf. Created to allow back button to update based on the URL, but it didn't work great
     */
    private _mainInit() {

        this.api.getMetaAttentions(this.uiConf.sentence(), this.uiConf.layer()).then(attention => {
            this.uiConf.nHeads = attention[this.uiConf.attType].att.length // To verify that the default 12 is correct
            this._init(attention)

            // Wrap postInit into function so asynchronous call does not mess with necessary inits
            const postInit = () => {
                this._toggleTokenSel()

                const toDisplay = this.uiConf.displayInspector()
                this._searchDisabler()

                if (toDisplay == 'context') {
                    this._queryContext()
                } else if (toDisplay == 'embeddings') {
                    this._queryEmbeddings()
                }
            }

            if (this.uiConf.maskInds().length > 0) {
                this.tokCapsule.a.maskInds = this.uiConf.maskInds()
                this.api.updateMaskedMetaAttentions(this.tokCapsule.a, this.uiConf.layer()).then(r => {
                    this.attCapsule.updateFromMasking(r, this.uiConf.hideClsSep()); // Suspicious...
                    this.tokCapsule.updateEmbeddingsFromMasking(r)
                    this.update()
                    postInit()
                })
            } else {
                this.update()
                postInit()
            }
        });
    }

    private _init(attention: tp.AttentionMetaResponse) {
        this.attCapsule = makeFromMetaResponse(attention, this.uiConf.hideClsSep())
        this.tokCapsule = new TokenWrapper(attention);

        this.sels = {
            body: d3.select('body'),
            atnContainer: d3.select('#atn-container'),
            atnDisplay: d3.select("#atn-display"),
            atnHeads: {
                left: d3.select("#left-att-heads"),
                right: d3.select("#right-att-heads"),
            },
            form: {
                sentenceA: d3.select("#form-sentence-a"),
                button: d3.select("#update-sentence"),
            },
            tokens: {
                left: d3.select("#left-tokens"),
                right: d3.select("#right-tokens"),
            },
            clsToggle: d3.select("#cls-toggle").select(".switch"),
            layerCheckboxes: d3.select("#layer-select"),
            headCheckboxes: d3.select("#head-select"),
            contextQuery: d3.select("#search-contexts"),
            embeddingQuery: d3.select("#search-embeddings"),
            selectedHeads: d3.select("#selected-heads"),
            headSelectAll: d3.select("#select-all-heads"),
            headSelectNone: d3.select("#select-no-heads"),
            testCheckbox: d3.select("#simple-embed-query"),
            threshSlider: d3.select("#my-range"),
            corpusInspector: d3.select("#corpus-similar-sentences-div"),
            corpusMatManager: d3.select("#corpus-mat-container"),
            histograms: {
                matchedWord: d3.select("#matched-histogram-container"),
                maxAtt: d3.select("#max-att-histogram-container"),
            },
            buttons: {
                killLeft: d3.select("#kill-left"),
                addLeft: d3.select("#minus-left"),
                addRight: d3.select("#plus-right"),
                killRight: d3.select("#kill-right"),
                refresh: d3.select("#mat-refresh")
            },
            metaSelector: {
                matchedWord: d3.select("#matched-meta-select"),
                maxAtt: d3.select("#max-att-meta-select")
            }
        }

        this.eventHandler = new SimpleEventHandler(<Element>this.sels.body.node());

        this.vizs = {
            leftHeads: new AttentionHeadBox(this.sels.atnHeads.left, this.eventHandler, {side: "left"}),
            rightHeads: new AttentionHeadBox(this.sels.atnHeads.right, this.eventHandler, {side: "right"}),
            tokens: {
                left: new LeftTextToken(this.sels.tokens.left, this.eventHandler),
                right: new RightTextToken(this.sels.tokens.right, this.eventHandler),
            },
            attentionSvg: new AttentionGraph(this.sels.atnDisplay, this.eventHandler),
            corpusInspector: new CorpusInspector(this.sels.corpusInspector, this.eventHandler),
            corpusMatManager: new CorpusMatManager(this.sels.corpusMatManager, this.eventHandler, {idxs: this.uiConf.offsetIdxs()}),
            histograms: {
                matchedWord: new CorpusHistogram(this.sels.histograms.matchedWord, this.eventHandler),
                maxAtt: new CorpusHistogram(this.sels.histograms.maxAtt, this.eventHandler),
            },
        }

        this._staticInits()
        this._bindEventHandler()
    }

    private _bindEventHandler() {
        //#region event handler binding
        this.eventHandler.bind(TextTokens.events.tokenDblClick, (e) => {
            const letter = sideToLetter(e.side, this.uiConf.attType)
            this.tokCapsule[letter].toggle(e.ind)
            this.sels.body.style("cursor", "progress")
            this.api.updateMaskedMetaAttentions(this.tokCapsule.a, this.uiConf.layer()).then(
                (r: tp.AttentionMetaMaskedResponse) => {
                    this.attCapsule.updateFromMasking(r, this.uiConf.hideClsSep());
                    this.tokCapsule.updateEmbeddingsFromMasking(r)

                    this.uiConf.maskInds(this.tokCapsule.a.maskInds)

                    this.update();
                    this.sels.body.style("cursor", "default")
                }
            )
        })

        this.eventHandler.bind(TextTokens.events.tokenMouseOver, (e: tp.TokenEvent) => {
            chooseShowBySide(this.uiConf.token(), e)
        })

        this.eventHandler.bind(TextTokens.events.tokenMouseOut, (e) => {
            chooseShowAll(this.uiConf.token())
        })

        this.eventHandler.bind(TextTokens.events.tokenClick, (e: tp.TokenEvent) => {
            this.uiConf.toggleToken(e)
            this._toggleTokenSel()
            showBySide(e)
        })


        this.eventHandler.bind(AttentionHeadBox.events.rowMouseOver, (e: tp.HeadBoxEvent) => {
            // Don't do anything special on row mouse over
        })

        this.eventHandler.bind(AttentionHeadBox.events.rowMouseOut, () => {
            // Don't do anything special on row mouse out
        })

        this.eventHandler.bind(AttentionHeadBox.events.boxMouseOver, (e: tp.HeadBoxEvent) => {
            const updateMat = this.attCapsule.byHead(e.head)
            this.vizs.attentionSvg.data(updateMat)
            this.vizs.attentionSvg.update(updateMat)

            showBySide(this.uiConf.token())
        })

        this.eventHandler.bind(AttentionHeadBox.events.boxMouseOut, () => {
            const att = this.attCapsule.byHeads(this.uiConf.heads())
            this.vizs.attentionSvg.data(att)
            this.vizs.attentionSvg.update(att)
            showBySide(this.uiConf.token())
        })

        this.eventHandler.bind(AttentionHeadBox.events.boxClick, (e: { head }) => {
            const result = this.uiConf.toggleHead(e.head)
            if (result == tp.Toggled.ADDED) {
                selectHead(e.head)
            } else if (result == tp.Toggled.REMOVED) {
                unselectHead(e.head)
            }

            this._searchDisabler()
            this._renderHeadSummary();
            this.renderSvg();
        })

        this.eventHandler.bind(CorpusMatManager.events.mouseOver, (e: { val: "pos" | "dep" | "is_ent", idx: number }) => {
            const selector = `.inspector-cell[index-offset='${e.idx}']`
            d3.selectAll(selector).classed("hovered-col", true)
        })

        this.eventHandler.bind(CorpusMatManager.events.mouseOut, (e: { idx: number }) => {
            const selector = `.inspector-cell[index-offset='${e.idx}']`
            d3.selectAll(selector).classed("hovered-col", false)
        })
    }

    private _toggleTokenSel() {
        const e = this.uiConf.token()
        const alreadySelected = d3.select('.selected-token')

        // If no token should be selected, unselect all tokens
        if (isNullToken(e)) {
            const newSel: d3.Selection<BaseType, any, BaseType, any> = d3.selectAll('.selected-token')
            if (!newSel.empty()) newSel.classed('selected-token', false)
        }

        // Otherwise, select the indicated token
        else {
            const token2String = (e: tp.TokenEvent) => `#${e.side}-token-${e.ind}`
            const newSel = d3.select(token2String(e))
            // Check that selection exists
            if (!newSel.empty()) newSel.classed('selected-token', true)
        }

        // Remove previous token selection, if any
        if (!alreadySelected.empty()) {
            alreadySelected.classed('selected-token', false)
        }

        this._searchDisabler()
    }

    private _staticInits() {
        this._initSentenceForm();
        this._initQueryForm();
        this._initCheckboxes();
        this._initAdder();
        this._renderHeadSummary();
        this._initMetaSelectors();
        this._initToggle();
        this.renderAttHead();
    }

    private _initAdder() {
        const updateUrlOffsetIdxs = () => {
            this.uiConf.offsetIdxs(this.vizs.corpusMatManager.idxs)
        }

        const fixCorpusMatHeights = () => {
            const newWrapped = this._wrapResults(this.vizs.corpusMatManager.data())
            this.vizs.corpusMatManager.data(newWrapped.data)
            updateUrlOffsetIdxs()
        }

        this.sels.buttons.addRight.on('click', () => {
            this.vizs.corpusMatManager.addRight()
            updateUrlOffsetIdxs()
        })

        this.sels.buttons.addLeft.on('click', () => {
            this.vizs.corpusMatManager.addLeft()
            updateUrlOffsetIdxs()
        })

        this.sels.buttons.killRight.on('click', () => {
            this.vizs.corpusMatManager.killRight()
            updateUrlOffsetIdxs()
        })

        this.sels.buttons.killLeft.on('click', () => {
            this.vizs.corpusMatManager.killLeft()
            updateUrlOffsetIdxs()
        })

        this.sels.buttons.refresh.on('click', () => {
            fixCorpusMatHeights();
        })

        const onresize = () => {
            if (this.sels.corpusInspector.text() != '') fixCorpusMatHeights();
        }

        window.onresize = onresize
    }

    private _initMetaSelectors() {
        this._initMatchedWordSelector(this.sels.metaSelector.matchedWord)
        this._initMaxAttSelector(this.sels.metaSelector.maxAtt)
    }

    private _initMaxAttSelector(sel: D3Sel) {
        const self = this;

        const chooseSelected = (value) => {
            const ms = sel.selectAll('label')
            ms.classed('active', false)
            const el = sel.selectAll(`label[value=${value}]`)
            el.classed('active', true)
        }

        chooseSelected(this.uiConf.metaMax())

        const el = sel.selectAll('label')
        el.on('click', function () {
            const val = <SimpleMeta>d3.select(this).attr('value');

            // Do toggle
            sel.selectAll('.active').classed('active', false)
            d3.select(this).classed('active', true)
            self.uiConf.metaMax(val)
            self.vizs.histograms.maxAtt.meta(val)
        })
    }

    private _initMatchedWordSelector(sel: D3Sel) {
        const self = this;

        const chooseSelected = (value) => {
            const ms = sel.selectAll('label')
            ms.classed('active', false)
            const el = sel.selectAll(`label[value=${value}]`)
            el.classed('active', true)
        }

        chooseSelected(this.uiConf.metaMatch())

        const el = sel.selectAll('label')
        el.on('click', function () {
            const val = <SimpleMeta>d3.select(this).attr('value')

            // Do toggle
            sel.selectAll('.active').classed('active', false)
            d3.select(this).classed('active', true)
            self.uiConf.metaMatch(val)
            self._updateCorpusInspectorFromMeta(val)
        })
    }

    private _disableSearching(attr: boolean) {
        setSelDisabled(attr, this.sels.contextQuery)
        setSelDisabled(attr, this.sels.embeddingQuery)
    }

    private _updateCorpusInspectorFromMeta(val: tp.SimpleMeta) {
        this.vizs.corpusMatManager.pick(val)
        this.vizs.histograms.matchedWord.meta(val)
    }

    private _initSentenceForm() {
        const self = this;

        this.sels.form.sentenceA.attr('placeholder', "Enter new sentence to analyze")
        this.sels.form.sentenceA.attr('value', this.uiConf.sentence())

        const clearInspector = () => {
            self.vizs.corpusMatManager.clear();
            self.vizs.corpusInspector.clear();
            self.vizs.histograms.matchedWord.clear();
            self.vizs.histograms.maxAtt.clear();
        }

        const submitNewSentence = () => {
            // replace all occurences of '#' in sentence as this causes the API to break
            const sentence_a: string = this.sels.form.sentenceA.property("value").replace(/\#/g, '')

            // Only update if the form is filled correctly
            if (sentence_a.length) {
                this.sels.body.style("cursor", "progress")
                this.api.getMetaAttentions(sentence_a, this.uiConf.layer())
                    .then((r: tp.AttentionMetaResponse) => {
                        this.uiConf.sentence(sentence_a)
                        this.uiConf.rmToken();
                        this.attCapsule.updateFromNormal(r, this.uiConf.hideClsSep());
                        this.tokCapsule.updateFromResponse(r);
                        this._toggleTokenSel();
                        this.update();
                        clearInspector();
                        this.sels.body.style("cursor", "default")
                    })
            }
        }

        const onEnter = R.curry((keyCode, f, event) => {
            const e = event || window.event;
            if (e.keyCode !== keyCode) return;
            e.preventDefault();
            f();
        })

        const onEnterSubmit = onEnter(13, submitNewSentence)

        const btn = this.sels.form.button;
        const inputBox = this.sels.form.sentenceA;

        btn.on("click", submitNewSentence)
        inputBox.on('keypress', onEnterSubmit)
    }

    private _getSearchEmbeds() {
        const savedToken = this.uiConf.token();
        const out = this.vizs.tokens[savedToken.side].getEmbedding(savedToken.ind)
        return out.embeddings
    }

    private _getSearchContext() {
        const savedToken = this.uiConf.token();
        const out = this.vizs.tokens[savedToken.side].getEmbedding(savedToken.ind)
        return out.contexts
    }

    private _searchEmbeddings() {
        const self = this;
        console.log("SEARCHING EMBEDDINGS");
        const embed = this._getSearchEmbeds()
        const layer = self.uiConf.layer()
        const heads = self.uiConf.heads()
        const k = 50

        this.sels.body.style("cursor", "progress")
        self.api.getNearestWozEmbeddings(embed, layer, heads, k)
            .then((val: tp.FaissSearchResults[]) => {
                // Get heights of corpus inspector rows.
                self.vizs.corpusInspector.update(val)

                const wrappedVals = self._wrapResults(val)
                const countedVals = wrappedVals.getMatchedHistogram()
                const offsetVals = wrappedVals.getMaxAttHistogram()

                self.vizs.corpusMatManager.update(wrappedVals.data)
                self.vizs.histograms.matchedWord.update(countedVals)
                self.vizs.histograms.maxAtt.update(offsetVals)
                self.uiConf.displayInspector('embeddings')
                this._updateCorpusInspectorFromMeta(this.uiConf.metaMatch())
                this.sels.body.style("cursor", "default")
            })
    }

    private _searchContext() {
        const self = this;
        console.log("SEARCHING CONTEXTS");
        const context = this._getSearchContext()
        const layer = self.uiConf.layer()
        const heads = self.uiConf.heads()
        const k = 50

        this.sels.body.style("cursor", "progress")

        self.api.getNearestWozContexts(context, layer, heads, k)
            .then((val: tp.FaissSearchResults[]) => {
                // Get heights of corpus inspector rows.
                self.vizs.corpusInspector.update(val)

                const wrappedVals = self._wrapResults(val)
                const countedVals = wrappedVals.getMatchedHistogram()
                const offsetVals = wrappedVals.getMaxAttHistogram()
                self.vizs.corpusMatManager.update(wrappedVals.data)

                self.vizs.histograms.matchedWord.update(countedVals)
                self.vizs.histograms.maxAtt.update(offsetVals)

                self.uiConf.displayInspector('context')
                this._updateCorpusInspectorFromMeta(this.uiConf.metaMatch())
                self.vizs.histograms.maxAtt.meta(self.uiConf.metaMax())
                this.sels.body.style("cursor", "default")
            })
    }

    private _queryContext() {
        const self = this;

        if (!isNullToken(this.uiConf.token())) {
            this._searchContext();
        } else {
            console.log("Was told to show inspector but was not given a selected token embedding")
        }
    }

    private _queryEmbeddings() {
        const self = this;

        if (!isNullToken(this.uiConf.token())) {
            this._searchEmbeddings();
        } else {
            console.log("Was told to show inspector but was not given a selected token embedding")
        }
    }

    private _searchingDisabled() {
        return (this.uiConf.heads().length == 0) || (isNullToken(this.uiConf.token()))
    }

    private _searchDisabler() {
        this._disableSearching(this._searchingDisabled())
    }

    private _initQueryForm() {
        const self = this;
        this._searchDisabler()

        this.sels.contextQuery.on("click", () => {
            self._queryContext()
        })

        this.sels.embeddingQuery.on("click", () => {
            self._queryEmbeddings()
        })
    }

    private _renderHeadSummary() {
        this.sels.selectedHeads
            .html(R.join(', ', this.uiConf.heads()))
    }

    // Modify faiss results with corresponding heights
    private _wrapResults(returnedFaissResults: tp.FaissSearchResults[]) {

        const rows = d3.selectAll('.inspector-row')

        // Don't just use offsetHeight since that rounds to the nearest integer
        const heights = rows.nodes().map((n: HTMLElement) => n.getBoundingClientRect().height)

        const newVals = returnedFaissResults.map((v, i) => {
            return R.assoc('height', heights[i], v)
        })
        const wrappedVals = new FaissSearchResultWrapper(newVals)

        return wrappedVals
    }

    private _initCheckboxes() {
        const self = this;

        const checkboxes = this.sels.layerCheckboxes.selectAll(".layerCheckbox")
            .data(_.range(0, this.attCapsule.nLayers))
            .join("label")
            .attr("class", "btn button layerCheckbox")
            .classed('active', (d, i) => i == 0)
            .text((d) => d)
            .append("input")
            .attr("type", "radio")
            .attr("class", "checkbox-inline")
            .attr("name", "layerbox")
            // .attr("head", d => d)
            .attr("id", (d, i) => "layerCheckbox" + i)
            // .text((d, i) => d + " ")

        // d3.selectAll('.x')
        //     .on('click', function () {
        //         const me = this;
        //         d3.selectAll('.x').classed('selected',
        //             function () {
        //                 return this == me;
        //             })
        //     })
        //     .on('click', d => {
        //         const me = this;
        //         d3.selectAll('.x').classed('selected',
        //             dd => dd == d)
        //     })


        fromEvent(checkboxes.nodes(), 'change').pipe(
            /// TODO: CHECK !!!
            tap((e: Event) => {
                const myData = d3.select(<BaseType>e.target).datum();
                console.log(myData, "--- myData");
                this.sels.layerCheckboxes.selectAll(".layerCheckbox")
                    .classed('active', d => d === myData)

            }),
            map((v: Event) => +d3.select(<BaseType>v.target).datum()),
            tap(v => {
                console.log("New layer: ", v);
                self.uiConf.layer(v);
                self.sels.body.style("cursor", "progress");
            }),
            switchMap((v) => from(self.api.updateMaskedMetaAttentions(self.tokCapsule.a, v)))
        ).subscribe({
            next: (r: tp.AttentionMetaMaskedResponse) => {
                self.attCapsule.updateFromMasking(r, self.uiConf.hideClsSep())
                self.tokCapsule.updateEmbeddingsFromMasking(r)

                self.uiConf.maskInds(self.tokCapsule.a.maskInds)
                self.update();
                self.sels.body.style("cursor", "default")
                self._toggleTokenSel();
            }
        })

        const layerId = `#layerCheckbox${this.uiConf.layer()}`
        d3.select(layerId).attr("checked", "checked")

        // Init threshold stuff
        const dispThresh = (thresh) => Math.round(thresh * 100)
        d3.select('#my-range-value').text(dispThresh(self.uiConf.threshold()))

        this.sels.threshSlider.on("input", _.throttle(function () {
            const node = <HTMLInputElement>this;
            self.uiConf.threshold(+node.value / 100);
            d3.select('#my-range-value').text(dispThresh(self.uiConf.threshold()))
            self.vizs.attentionSvg.threshold(self.uiConf.threshold())
        }, 100))

        this.sels.headSelectAll.on("click", function () {
            self.uiConf.selectAllHeads();
            self._searchDisabler()
            self.renderSvg()
            self.renderAttHead()
        })

        this.sels.headSelectNone.on("click", function () {
            self.uiConf.selectNoHeads();
            self._searchDisabler();
            self.renderSvg()
            self.renderAttHead()
            Sel.setHidden(".atn-curve")
        })
    }

    _initToggle() {
        fromEvent(this.sels.clsToggle.node(), 'input').pipe(
            // @ts-ignore -- TODO: FIX !
            map(e => e.srcElement.checked),
        ).subscribe({
            next: v => {
                this.uiConf.hideClsSep(v)
                this.attCapsule.zeroed(v)
                this.renderSvg();
                this.renderAttHead();
            }
        })
    }

    renderAttHead() {
        const heads = _.range(0, this.uiConf.nHeads)
        const focusAtt = this.attCapsule.att
        const leftAttInfo = getAttentionInfo(focusAtt, heads, "left");
        const rightAttInfo = getAttentionInfo(focusAtt, heads, "right");
        this.vizs.leftHeads.update(leftAttInfo)
        this.vizs.rightHeads.update(rightAttInfo)
        this._renderHeadSummary();

        // Make sure
        heads.forEach((h) => {
            if (this.uiConf.headSet().has(h)) {
                selectHead(h)
            } else {
                unselectHead(h)
            }
        })
    };

    renderTokens() {
        const left = this.tokCapsule[this.uiConf.attType[0]]
        const right = this.tokCapsule[this.uiConf.attType[1]]

        this.vizs.tokens.left.update(left.tokenData);
        this.vizs.tokens.left.mask(left.maskInds);
        this.vizs.tokens.right.update(right.tokenData);
        this.vizs.tokens.right.mask(right.maskInds);
        // displaySelectedToken
    }

    renderSvg() {
        const att = this.attCapsule.byHeads(this.uiConf.heads())
        const svg = <AttentionGraph>this.vizs.attentionSvg.data(att);
        svg.update(att)
        const maxTokens = _.max([this.tokCapsule.a.length()])
        const newHeight = svg.options.boxheight * maxTokens
        svg.height(newHeight)

        // Don't redisplay everything if one token is selected
        showBySide(this.uiConf.token())
    };

    render() {
        this.renderTokens();
        this.renderSvg();
        this.renderAttHead();
        // displaySelectedToken
    }

    update() {
        this.render();
    }
}
