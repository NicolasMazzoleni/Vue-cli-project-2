import Vue from 'vue'
import App from './App.vue'
import MachineList from './MachineList.vue'
import MachineMap from './MachineMap.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.component('machine-map', MachineMap);
Vue.component('machine-list', MachineList);
Vue.use(BootstrapVue);


new Vue({
  el: '#app',
  render: h => h(App)
})
