import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'

import Store from "./stores/factures-et-avoirs.json";
import AEoptions from "./stores/ae-options.json";

import Dashboard from './views/Dashboard.vue'
import Factures from './views/Factures.vue'
import SingleFacture from './views/SingleFacture.vue'

import moment from 'moment'

Vue.use(VueRouter);

Vue.config.productionTip = false
Vue.prototype.$aeoptions = AEoptions;
Vue.prototype.$invoices = Store.invoices;
Vue.prototype.moment = moment


const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/",
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
    },
    {
      path: "/factures/new",
      component: SingleFacture,
      name: "SingleFacture",
      meta: {
        title: "SingleFacture",
      },
    }
  ],
});

export const vm = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
