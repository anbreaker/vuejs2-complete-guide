import Vue from "vue"
import "./plugins/vuetify"
import App from "./App.vue"

import router from "./router/router"
import store from "./store/store"
import { currency } from "./filters/filters"

Vue.config.productionTip = false

Vue.filter("currency", currency)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
