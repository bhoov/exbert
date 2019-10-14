import * as tp from './types'
import * as d3 from 'd3'
import * as R from 'ramda'
import {COLORS200} from '../etc/colors' 

export class SpacyInfo {
    colorScale:tp.ColorMetaScale

    constructor(){
        this.colorScale = this.createColorScales();
    }

    static EnglishMetaOptions: tp.MetaOptions = {
        pos: ['punct', 'sym', 'x', 'adj', 'verb', 'conj', 'num', 'et', 'adv', 'x', 'adp', 'noun', 'propn', 'part', 'pron', 'space', 'intj'],
        dep: ['root', 'ROOT', 'acl', 'acomp', 'advcl', 'advmod', 'agent', 'amod', 'appos', 'attr', 'aux', 'auxpass', 'case', 'cc', 'ccomp', 'compound', 'conj', 'cop', 'csubj', 
        'csubjpass', 'dative', 'dep', 'det', 'dobj', 'expl', 'intj', 'mark', 'meta', 'neg', 'nn', 'nounmod', 'npmod', 'nsubj', 'nsubjpass', 'nummod', 'oprd', 
        'obj', 'obl', 'parataxis', 'pcomp', 'pobj', 'poss', 'preconj', 'predet', 'prep', 'prt', 'punct', 'quantmod', 'relcl', 'root', 'xcomp', 'npadvmod'],
        is_ent: [true, false],
        ents: ['person', 'norp', 'fac', 'org', 'gpe', 'loc', 'product', 'event', 'work_of_art', 'law', 'language', 'date', 'time', 'percent', 'money', 'quantity', 'ordinal', 
                'cardinal'],
    }

    /**
     * Obsolete. Represents the information that is included when trained on the universal corpus
     */
    static UniversalMetaOptions: tp.MetaOptions = {
        pos: ['adj', 'adp', 'adv', 'aux', 'conj', 'cconj', 'det', 'intj', 'noun', 'num', 'part', 'pron', 'propn', 'punct', 'sconj', 'sym', 'verb', 'x', 'space'],
        dep: ['acl', 'advcl', 'advmod', 'amod', 'appos', 'aux', 'case', 'cc', 'ccomp', 'clf', 'compound', 'conj', 'cop', 'csubj', 'dep', 'det', 'discourse', 
                'dislocated', 'expl', 'fixed', 'flat', 'goeswith', 'iobj', 'list', 'mark', 'nmod', 'nsubj', 'nummod', 'obj', 'obl', 'orphan', 'parataxis', 'punct', 'reparandum', 
                'root', 'vocative', 'xcomp'],
        is_ent: [true, false],
        ents: ['person', 'norp', 'fac', 'org', 'gpe', 'loc', 'product', 'event', 'work_of_art', 'law', 'language', 'date', 'time', 'percent', 'money', 'quantity', 'ordinal', 
                'cardinal'],
    }

    static TotalMetaOptions: tp.MetaOptions = {
        pos: R.union(SpacyInfo.EnglishMetaOptions.pos, SpacyInfo.UniversalMetaOptions.pos),
        dep: SpacyInfo.EnglishMetaOptions.dep,
        is_ent: SpacyInfo.EnglishMetaOptions.is_ent,
        ents: SpacyInfo.EnglishMetaOptions.ents,
    }

    createColorScales(): tp.ColorMetaScale{
        const toScale = (keys: Array<number|string|boolean>) => {
            const obj = R.zipObj(R.map(String, keys), COLORS200.slice(0, keys.length))
            return k => R.propOr("black", k, obj)
        }

        const myColors = {
            pos: toScale(SpacyInfo.TotalMetaOptions.pos),
            dep: toScale(SpacyInfo.TotalMetaOptions.dep),
            is_ent: toScale(SpacyInfo.TotalMetaOptions.is_ent),
            ents: toScale(SpacyInfo.TotalMetaOptions.ents),
            offset: d3.scaleOrdinal().range(['black'])
        }

        return <tp.ColorMetaScale><unknown>myColors
    }
}

export const spacyColors = new SpacyInfo();