import Vue from "vue"
import axios from "axios"
require("dotenv").config()

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: process.env.VUE_APP_URL_FIREBASE,
    })
  },
})
