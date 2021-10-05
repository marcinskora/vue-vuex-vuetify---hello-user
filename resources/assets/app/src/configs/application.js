import Vue from 'vue'
import Vuex from 'vuex'

import state from './vuex/state'
import mutations from './vuex/mutations'
import getters from './vuex/getters'

Vue.use(Vuex)

const Store = new Vuex.Store({
    state,
    mutations,
    getters
});

export default {
    Vue: Vue,
    Store: Store
};
