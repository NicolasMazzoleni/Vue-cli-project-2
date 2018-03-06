import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes.js'
Vue.use(VueRouter);


const router = new VueRouter({
routes: Routes,
    //mode:'history'
});

new Vue({
  el: '#app',
    render: h => h(App),
    router: router
})
