import actions from './moduleA/actions'
import getters from './moduleA/getters'
import mutations from './moduleA/mutations'
import state from './moduleA/state'

export const moduleA = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}