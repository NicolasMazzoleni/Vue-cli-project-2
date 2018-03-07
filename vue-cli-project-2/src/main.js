import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes.js'
Vue.use(VueRouter);


import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCXRnDaRTrj_d6CaMWYQlJF1EvUMH6IISI',
  }
})



const router = new VueRouter({
routes: Routes,
    //mode:'history'
});

new Vue({
  el: '#app',
    render: h => h(App),
    router: router
})
