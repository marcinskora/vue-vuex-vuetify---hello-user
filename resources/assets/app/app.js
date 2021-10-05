import 'es6-promise/auto'
import Application from './src/configs/application'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import vuetify from './src/configs/vuetify'
import routes from './src/configs/routes'
import app from './src/components/app'

const Vue = Application.Vue;
const store = Application.Store;
const router = new VueRouter({routes})


Vue.use(VueRouter)
new Vue({
    data: () => ({drawer: null}),
    components: { app },
    vuetify,
    router,
    store
}).$mount('#app')
