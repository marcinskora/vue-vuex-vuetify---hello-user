import Vue from 'vue'
import Vuex from 'vuex'

import { moduleA } from './vuex/modules/moduleA'

Vue.use(Vuex)


const Store = new Vuex.Store({
    modules: {
        a: moduleA
    }
});

export default {
    Vue: Vue,
    Store: Store
};
