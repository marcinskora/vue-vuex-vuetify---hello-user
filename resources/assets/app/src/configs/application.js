import Vue from 'vue'
import Vuex from 'vuex'

import state from './vuex/state'
import mutations from './vuex/mutations'
import getters from './vuex/getters'
import actions from './vuex/actions'

Vue.use(Vuex)

const Store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});

export default {
    Vue: Vue,
    Store: Store
};
