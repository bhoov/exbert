import * as d3 from 'd3';
import * as _ from "lodash"
import * as R from 'ramda'
import * as tp from '../etc/types';
import * as rsp from '../api/responses';
import '../etc/xd3'
import { API } from '../api/mainApi'
import { UIConfig } from '../uiConfig'
import { TextTokens, LeftTextToken, RightTextToken } from './TextToken'
import { AttentionHeadBox, getAttentionInfo } from './AttentionHeadBox'
import { AttentionGraph } from './AttentionConnector'
import { CorpusInspector } from './CorpusInspector'
import { TokenWrapper, sideToLetter } from '../data/TokenWrapper'
import { AttentionWrapper, makeFromMetaResponse } from '../data/AttentionCapsule'
import { SimpleEventHandler } from '../etc/SimpleEventHandler'
import { CorpusMatManager } from '../vis/CorpusMatManager'
import { CorpusHistogram } from '../vis/CorpusHistogram'
import { FaissSearchResultWrapper } from '../data/FaissSearchWrapper'
import { D3Sel, Sel } from '../etc/Util';
import { from, fromEvent, interval } from 'rxjs'
import { switchMap, map, tap } from 'rxjs/operators'
import { BaseType } from "d3";
import { SimpleMeta } from "../etc/types";
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
    api: API
    uiConf: UIConfig
    attCapsule: AttentionWrapper
    tokCapsule: TokenWrapper
    sels: any                           // Contains initial d3 selections of objects
    vizs: any                           // Contains vis components wrapped around parent sel
    eventHandler: SimpleEventHandler    // Orchestrates events raised from components

    constructor() {
        this.api = new API()
        this.uiConf = new UIConfig()
        this.skeletonInit()
        this.mainInit();
    }

    /**
     * Functions that can be called without any information of a response.
     * 
     * This should be called once and only once
     */
    skeletonInit() {
        this.sels = {
            body: d3.select('body'),
            atnContainer: d3.select('#atn-container'),
            atnDisplay: d3.select("#atn-display"),
            modelSelector: d3.select("#model-option-selector"),
            corpusSelector: d3.select("#corpus-select"),
            atnHeads: {
                left: d3.select("#left-att-heads"),
                right: d3.select("#right-att-heads"),
                headInfo: d3.select("#head-info-box")
                    .classed('mat-hover-display', true)
                    .classed('text-center', true)
                    .style('width', String(70) + 'px')
                    .style('height', String(30) + 'px')
                    .style('visibillity', 'hidden')
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
            corpusMsgBox: d3.select("#corpus-msg-box"),
            histograms: {
                matchedWordDescription: d3.select("#match-kind"),
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
            leftHeads: new AttentionHeadBox(this.sels.atnHeads.left, this.eventHandler, { side: "left", }),
            rightHeads: new AttentionHeadBox(this.sels.atnHeads.right, this.eventHandler, { side: "right" }),
            tokens: {
                left: new LeftTextToken(this.sels.tokens.left, this.eventHandler),
                right: new RightTextToken(this.sels.tokens.right, this.eventHandler),
            },
            attentionSvg: new AttentionGraph(this.sels.atnDisplay, this.eventHandler),
            corpusInspector: new CorpusInspector(this.sels.corpusInspector, this.eventHandler),
            corpusMatManager: new CorpusMatManager(this.sels.corpusMatManager, this.eventHandler, { idxs: this.uiConf.offsetIdxs() }),
            histograms: {
                matchedWord: new CorpusHistogram(this.sels.histograms.matchedWord, this.eventHandler),
                maxAtt: new CorpusHistogram(this.sels.histograms.maxAtt, this.eventHandler),
            },
        }

        this._bindEventHandler()
    }

    private mainInit() {
        const self = this;
        this.sels.body.style("cursor", "progress")
        this.api.getModelDetails(this.uiConf.model()).then(md => {
            const val = md.payload
            this.uiConf.nLayers(val.nlayers).nHeads(val.nheads)
            this.initLayers(this.uiConf.nLayers())

            this.api.getMetaAttentions(this.uiConf.model(), this.uiConf.sentence(), this.uiConf.layer()).then(attention => {
                const att = attention.payload;
                this.initFromResponse(att)

                // Wrap postInit into function so asynchronous call does not mess with necessary inits
                const postResponseDisplayCleanup = () => {
                    this._toggleTokenSel()

                    const toDisplay = this.uiConf.displayInspector()
                    this._searchDisabler()

                    if (toDisplay == 'context') {
                        this._queryContext()
                    } else if (toDisplay == 'embeddings') {
                        this._queryEmbeddings()
                    }
                }

                let normBy
                if ((this.uiConf.modelKind() == tp.ModelKind.Autoregressive) && (!this.uiConf.hideClsSep())) {
                    normBy = tp.NormBy.Col
                }
                else {
                    normBy = tp.NormBy.All
                }
                this.vizs.attentionSvg.normBy = normBy

                if (this.uiConf.maskInds().length > 0) {
                    this.tokCapsule.a.maskInds = this.uiConf.maskInds()

                    this.api.updateMaskedAttentions(this.uiConf.model(), this.tokCapsule.a, this.uiConf.sentence(), this.uiConf.layer()).then(resp => {
                        const r = resp.payload;
                        this.attCapsule.updateFromNormal(r, this.uiConf.hideClsSep());
                        this.tokCapsule.updateTokens(r)
                        this.update()
                        postResponseDisplayCleanup()
                    })
                } else {
                    this.update()
                    postResponseDisplayCleanup()
                }

                if (this.uiConf.modelKind() == tp.ModelKind.Autoregressive) {
                    // Ensure only 1 mask ind is present for autoregressive models
                    if (this.uiConf.hasToken()) {
                        this.grayToggle(<number>this.uiConf.token().ind)
                    }
                    self.vizs.tokens.left.options.divHover.textInfo = "Would predict next..."
                    self.vizs.tokens.right.options.divHover.textInfo = "Would predict next..."
                }
                else {
                    self.vizs.tokens.left.options.divHover.textInfo = "Would predict here..."
                    self.vizs.tokens.right.options.divHover.textInfo = "Would predict here..."
                }

                this.sels.body.style("cursor", "default")
            });
        })

    }

    private initFromResponse(attention: tp.AttentionResponse) {
        this.attCapsule = makeFromMetaResponse(attention, this.uiConf.hideClsSep())
        this.tokCapsule = new TokenWrapper(attention);
        this._staticInits()
    }

    private leaveCorpusMsg(msg: string) {
        this.vizs.corpusInspector.hideView()
        this.vizs.corpusMatManager.hideView()
        console.log("Running leave msg");
        Sel.unhideElement(this.sels.corpusMsgBox)
        this.sels.corpusMsgBox.text(msg)
    }

    private _bindEventHandler() {
        const self = this;
        this.eventHandler.bind(TextTokens.events.tokenDblClick, (e) => {
            switch (self.uiConf.modelKind()) {
                case tp.ModelKind.Bidirectional: {
                    e.sel.classed("masked-token", !e.sel.classed("masked-token"));
                    const letter = sideToLetter(e.side, this.uiConf.attType)
                    self.tokCapsule[letter].toggle(e.ind)
                    self.sels.body.style("cursor", "progress")

                    self.api.updateMaskedAttentions(this.uiConf.model(), this.tokCapsule.a, this.uiConf.sentence(), this.uiConf.layer()).then((resp: rsp.AttentionDetailsResponse) => {
                        const r = resp.payload;
                        self.attCapsule.updateFromNormal(r, this.uiConf.hideClsSep());
                        self.tokCapsule.updateTokens(r);

                        self.uiConf.maskInds(this.tokCapsule.a.maskInds)

                        self.update();
                        self.sels.body.style("cursor", "default")
                    })
                    break;
                }
                case tp.ModelKind.Autoregressive: {
                    console.log("Autoregressive model doesn't do masking");
                    break;
                }
                default: {
                    console.log("What kind of model is this?");
                    break;
                }
            }
        })

        this.eventHandler.bind(TextTokens.events.tokenMouseOver, (e: tp.TokenEvent) => {
            chooseShowBySide(this.uiConf.token(), e)
        })

        this.eventHandler.bind(TextTokens.events.tokenMouseOut, (e) => {
            chooseShowAll(this.uiConf.token())
        })

        this.eventHandler.bind(TextTokens.events.tokenClick, (e: tp.TokenEvent) => {
            const tokToggle = () => {
                this.uiConf.toggleToken(e)
                this._toggleTokenSel()
                showBySide(e)
            }
            tokToggle()
            this.renderAttHead()
        })


        this.eventHandler.bind(AttentionHeadBox.events.rowMouseOver, (e: tp.HeadBoxEvent) => {
            self.sels.atnHeads.headInfo.style('visibility', 'visible')
        })


        this.eventHandler.bind(AttentionHeadBox.events.rowMouseOut, () => {
            self.sels.atnHeads.headInfo.style('visibility', 'hidden')
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

        this.eventHandler.bind(AttentionHeadBox.events.boxMouseMove, (e) => {
            const headInfo = self.sels.atnHeads.headInfo
            let left, top, borderRadius

            if (e.side == "left") {
                const divOffset = [12, 3]
                left = e.mouse[0] + e.baseX - (+headInfo.style('width').replace('px', '') + divOffset[0])
                top = e.mouse[1] + e.baseY - (+headInfo.style('height').replace('px', '') + divOffset[1])
                borderRadius = "8px 8px 1px 8px"
            }
            else {
                const divOffset = [-13, 3]
                left = e.mouse[0] + e.baseX + divOffset[0]
                top = e.mouse[1] + e.baseY - (+headInfo.style('height').replace('px', '') + divOffset[1])
                borderRadius = "8px 8px 8px 1px"
            }

            headInfo
                .style('visibility', 'visible')
                .style('left', String(left) + 'px')
                .style('top', String(top) + 'px')
                .style('border-radius', borderRadius)
                .text(`Head: ${e.ind + 1}`)

            // Don't do anything special on row mouse over
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

        this.eventHandler.bind(CorpusMatManager.events.mouseOver, (e: { val: "pos" | "dep" | "is_ent", offset: number }) => {
            // Uncomment the below if you want to modify the whole column
            // const selector = `.inspector-cell[index-offset='${e.offset}']`
            // d3.selectAll(selector).classed("hovered-col", true)
        })

        this.eventHandler.bind(CorpusMatManager.events.mouseOut, (e: { offset: number, idx: number }) => {
            // Uncomment the below if you want to modify the whole column
            // const selector = `.inspector-cell[index-offset='${e.offset}']`
            // d3.selectAll(selector).classed("hovered-col", false)
        })

        this.eventHandler.bind(CorpusMatManager.events.rectMouseOver, (e: { offset: number, idx: number }) => {
            const row = d3.select(`.inspector-row[rownum='${e.idx}']`)
            const word = row.select(`.inspector-cell[index-offset='${e.offset}']`)
            word.classed("hovered-col", true)
        })

        this.eventHandler.bind(CorpusMatManager.events.rectMouseOut, (e: { offset: number, idx: number }) => {
            const row = d3.select(`.inspector-row[rownum='${e.idx}']`)
            const word = row.select(`.inspector-cell[index-offset='${e.offset}']`)
            word.classed("hovered-col", false)
        })

    }

    private _toggleTokenSel() {
        const e = this.uiConf.token()
        const alreadySelected = d3.select('.selected-token')

        // If no token should be selected, unselect all tokens
        if (!this.uiConf.hasToken()) {
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

        if (this.uiConf.modelKind() == tp.ModelKind.Autoregressive) {
            this.grayToggle(+e.ind)
            this.markNextToggle(+e.ind, this.tokCapsule.a.length())
        }

        this._searchDisabler()
    }

    /** Gray all tokens that have index greater than ind */
    private grayBadToks(ind: number) {
        if (this.uiConf.modelKind() == tp.ModelKind.Autoregressive) {
            const grayToks = function (d, i) {
                const s = d3.select(this)
                s.classed("masked-token", i > ind)
            }
            d3.selectAll('.right-token').each(grayToks)
            d3.selectAll('.left-token').each(grayToks)
        }
    }


    private grayToggle(ind: number) {
        if (this.uiConf.hasToken())
            this.grayBadToks(ind)
        else
            d3.selectAll('.token').classed('masked-token', false)

    }

    private markNextWordToks(ind: number, N: number) {
        const markToks = function (d, i) {
            const s = d3.select(this)
            s.classed("next-token", i == Math.min(ind + 1, N))
        }
        d3.selectAll('.right-token').each(markToks)
        d3.selectAll('.left-token').each(markToks)
    }

    private markNextToggle(ind: number, N: number) {
        if (this.uiConf.hasToken())
            this.markNextWordToks(ind, N)
        else
            d3.selectAll('.token').classed('next-token', false)

    }

    private _initModelSelection() {
        const self = this

        console.log("INITIALIZING MODEL SElECTION");
        this.api.getSupportedModels().then(data => {
            this.uiConf.model(data[0].name)
            this.uiConf.modelKind(data[0].kind)

            const names = R.map(R.prop('name'))(data)
            const kinds = R.map(R.prop('kind'))(data)
            const kindmap = R.zipObj(names, kinds)

            this.sels.modelSelector.selectAll('.model-option')
                .data(data)
                .join('option')
                .classed('model-option', true)
                .property('value', d => d.name)
                .attr("modelkind", d => d.kind)
                .text(d => d.name)

            this.sels.modelSelector.property('value', this.uiConf.model());

            this.sels.modelSelector.on('change', function () {
                const me = d3.select(this)
                const mname = me.property('value')
                self.uiConf.model(mname);
                self.uiConf.modelKind(kindmap[mname]);
                if (kindmap[mname] == tp.ModelKind.Autoregressive) {
                    console.log("RESETTING MASK INDS");
                    self.uiConf.maskInds([])
                }
                self.mainInit();
            })

        })
    }

    private _initCorpusSelection() {
        const self = this
        this.api.getSupportedCorpora().then(data => {
            self.uiConf.corpus(data[0].code)
            self.sels.corpusSelector.selectAll('option')
                .data(data)
                .join('option')
                .property('value', d => d.code)
                .text(d => d.display)

            this.sels.corpusSelector.on('change', function () {
                const me = d3.select(this)
                self.uiConf.corpus(me.property('value'))
                console.log(self.uiConf.corpus());
            })
        })
    }

    private _staticInits() {
        this._initSentenceForm();
        this._initModelSelection();
        this._initCorpusSelection();
        this._initQueryForm();
        this._initAdder();
        this._renderHeadSummary();
        this._initMetaSelectors();
        this._initToggle();
        this.renderAttHead();
        this.renderTokens();
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
        this.vizs.corpusInspector.showNext(this.uiConf.showNext)
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
                this.api.getMetaAttentions(this.uiConf.model(), sentence_a, this.uiConf.layer())
                    .then((resp: rsp.AttentionDetailsResponse) => {
                        const r = resp.payload
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
        self.vizs.corpusInspector.showNext(self.uiConf.showNext)

        this.sels.body.style("cursor", "progress")
        self.api.getNearestEmbeddings(self.uiConf.model(), self.uiConf.corpus(), embed, layer, heads, k)
            .then((val: rsp.NearestNeighborResponse) => {
                if (val.status == 406) {
                    self.leaveCorpusMsg(`Embeddings are not available for model '${self.uiConf.model()}' and corpus '${self.uiConf.corpus()}' at this time.`)
                }
                else {
                    const v = val.payload

                    self.vizs.corpusInspector.unhideView()
                    self.vizs.corpusMatManager.unhideView()

                    // Get heights of corpus inspector rows.
                    self.vizs.corpusInspector.update(v)
                    const wrappedVals = self._wrapResults(v)
                    const countedVals = wrappedVals.getMatchedHistogram()
                    const offsetVals = wrappedVals.getMaxAttHistogram()

                    self.vizs.corpusMatManager.update(wrappedVals.data)
                    self.sels.histograms.matchedWordDescription.text(this.uiConf.matchHistogramDescription)
                    console.log("MATCHER: ", self.sels.histograms.matchedWord);
                    self.vizs.histograms.matchedWord.update(countedVals)
                    self.vizs.histograms.maxAtt.update(offsetVals)
                    self.uiConf.displayInspector('embeddings')
                    this._updateCorpusInspectorFromMeta(this.uiConf.metaMatch())
                }
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
        self.vizs.corpusInspector.showNext(self.uiConf.showNext)

        this.sels.body.style("cursor", "progress")

        self.api.getNearestContexts(self.uiConf.model(), self.uiConf.corpus(), context, layer, heads, k)
            .then((val: rsp.NearestNeighborResponse) => {
                // Get heights of corpus inspector rows.
                if (val.status == 406) {
                    console.log("Contexts are not available!");
                    self.leaveCorpusMsg(`Contexts are not available for model '${self.uiConf.model()}' and corpus '${self.uiConf.corpus()}' at this time.`)
                }
                else {
                    const v = val.payload;
                    console.log("HIDING");

                    self.vizs.corpusInspector.update(v)

                    Sel.hideElement(self.sels.corpusMsgBox)
                    self.vizs.corpusInspector.unhideView()
                    self.vizs.corpusMatManager.unhideView()

                    const wrappedVals = self._wrapResults(v)
                    const countedVals = wrappedVals.getMatchedHistogram()
                    const offsetVals = wrappedVals.getMaxAttHistogram()
                    self.vizs.corpusMatManager.update(wrappedVals.data)

                    self.vizs.histograms.matchedWord.update(countedVals)
                    self.vizs.histograms.maxAtt.update(offsetVals)

                    self.uiConf.displayInspector('context')
                    this._updateCorpusInspectorFromMeta(this.uiConf.metaMatch())
                    self.vizs.histograms.maxAtt.meta(self.uiConf.metaMax())
                }
                this.sels.body.style("cursor", "default")
            })
    }

    private _queryContext() {
        const self = this;

        if (this.uiConf.hasToken()) {
            this._searchContext();
        } else {
            console.log("Was told to show inspector but was not given a selected token embedding")
        }
    }

    private _queryEmbeddings() {
        const self = this;

        if (this.uiConf.hasToken()) {
            console.log("token: ", this.uiConf.token());
            this._searchEmbeddings();
        } else {
            console.log("Was told to show inspector but was not given a selected token embedding")
        }
    }

    private _searchingDisabled() {
        return (this.uiConf.heads().length == 0) || (!this.uiConf.hasToken())
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
            .html(R.join(', ', this.uiConf.heads().map(h => h + 1)))
    }

    // Modify faiss results with corresponding heights
    private _wrapResults(returnedFaissResults: tp.FaissSearchResults[]) {

        const rows = d3.selectAll('.inspector-row')

        // Don't just use offsetHeight since that rounds to the nearest integer
        const heights = rows.nodes().map((n: HTMLElement) => n.getBoundingClientRect().height)

        const newVals = returnedFaissResults.map((v, i) => {
            return R.assoc('height', heights[i], v)
        })

        const wrappedVals = new FaissSearchResultWrapper(newVals, this.uiConf.showNext)

        return wrappedVals
    }

    private initLayers(nLayers: number) {
        const self = this;
        let hasActive = false;

        const checkboxes = self.sels.layerCheckboxes.selectAll(".layerCheckbox")
            .data(_.range(0, nLayers))
            .join("label")
            .attr("class", "btn button layerCheckbox")
            .classed('active', (d, i) => {
                // Assign to largest layer available if uiConf.layer() > new nLayers
                if (d == self.uiConf.layer()) { // Javascript is 0 indexed!
                    hasActive = true;
                    return true
                }

                if (!hasActive && d == nLayers) {
                    self.uiConf.layer(d)
                    hasActive = true
                    return true
                }

                return false

            })
            .text((d) => d + 1)
            .append("input")
            .attr("type", "radio")
            .attr("class", "checkbox-inline")
            .attr("name", "layerbox")
            // .attr("head", d => d)
            .attr("id", (d, i) => "layerCheckbox" + i)
        // .text((d, i) => d + " ")

        fromEvent(checkboxes.nodes(), 'change').pipe(
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
            switchMap((v) => from(self.api.updateMaskedAttentions(self.uiConf.model(), self.tokCapsule.a, self.uiConf.sentence(), v)))
        ).subscribe({
            next: (resp: rsp.AttentionDetailsResponse) => {
                const r = resp.payload;
                self.attCapsule.updateFromNormal(r, this.uiConf.hideClsSep());
                self.tokCapsule.updateTokens(r);
                self.uiConf.maskInds(self.tokCapsule.a.maskInds)
                self.update();
                self.sels.body.style("cursor", "default")
                self._toggleTokenSel();
            }
        })

        const layerId = `#layerCheckbox${this.uiConf.layer()}`
        console.log("Layer ID: ", layerId);
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
        const heads = _.range(0, this.uiConf._nHeads)
        const focusAtt = this.attCapsule.att
        const token = this.uiConf.hasToken() ? this.uiConf.token() : null
        //@ts-ignore
        const leftAttInfo = getAttentionInfo(focusAtt, heads, "left", token);
        //@ts-ignore
        const rightAttInfo = getAttentionInfo(focusAtt, heads, "right", token);
        this.vizs.leftHeads.options.offset = this.uiConf.offset
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

        console.log("now: ", this.uiConf.offset);
        this.vizs.tokens.left.options.offset = this.uiConf.offset
        this.vizs.tokens.left.update(left.tokenData);
        this.vizs.tokens.left.mask(left.maskInds);
        this.vizs.tokens.right.update(right.tokenData);
        this.vizs.tokens.right.mask(right.maskInds);
        // displaySelectedToken
    }

    renderSvg() {
        const att = this.attCapsule.byHeads(this.uiConf.heads())
        this.vizs.attentionSvg.options.offset = this.uiConf.offset
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
    }

    update() {
        this.render();
    }
}
