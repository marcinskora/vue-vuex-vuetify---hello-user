import { userFirstnameZmiana, userLastnameZmiana, userEmailZmiana } from './mutation-types'

export default {
    delayuserFirstname(context,value) {    
        context.commit('userFirstname','Super Imię :)');
        setTimeout(()=>{
            context.commit('userFirstname',value.value);
        },5000)
    }
}