import { userFirstnameZmiana, userLastnameZmiana, userEmailZmiana } from './mutation-types'

export default {
    [userFirstnameZmiana](state,value) {
        state.user.firstname = value;
    },
    [userLastnameZmiana](state,value) {
        state.user.lastname = value;
    },
    [userEmailZmiana](state,value) {
        state.user.email = value;
    }
}