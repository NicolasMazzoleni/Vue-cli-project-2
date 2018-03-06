import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import MachineList from './MachineList.vue'
import MachineMap from './MachineMap.vue'
import BootstrapVue from 'bootstrap-vue'
import Routes from './routes.js'
Vue.component('machine-map', MachineMap);
Vue.component('machine-list', MachineList);
Vue.use(BootstrapVue);
Vue.use(VueRouter);


const router = new VueRouter({
routes: Routes,
    mode:'history'
});

new Vue({
  el: '#app',
    render: h => h(App),
    router: router
})
