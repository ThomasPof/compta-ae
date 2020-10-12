import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'

import Store from "./stores/factures-et-avoirs.json";
import AEoptions from "./stores/ae-options.json";

import Dashboard from './components/Dashboard.vue'
import Factures from './components/Factures.vue'


Vue.use(VueRouter);

Vue.config.productionTip = false
Vue.prototype.$aeoptions = AEoptions;
Vue.prototype.$invoices = Store.invoices;

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
      meta: {
        title: "Dashboard",
      },
    },
    {
      path: "/factures",
      component: Factures,
      name: "Factures",
      meta: {
        title: "Factures",
      },
    }
  ],
});

export const vm = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
