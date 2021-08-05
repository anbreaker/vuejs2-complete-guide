import Vue from "vue"
import axios from "axios"
require("dotenv").config()

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: process.env.VUE_APP_URL_FIREBASE,
      headers: {
        Authorization: "anbreaker",
      },
    })

    Vue.prototype.$http.interceptors.request.use(
      (config) => {
        console.log(config.method)
        return config
      },
      (error) => Promise.reject(error)
    )

    // Cria um interceptors um para alterar a estrutura da resposta Obj->[]
    Vue.prototype.$http.interceptors.response.use(
      (response) => {
        // const arr = []
        // for (let chave in response.data) {
        //   arr.push({ id: chave, ...response.data[chave] })
        // }
        // response.data = arr
        return response
      },
      (error) => Promise.reject(error)
    )
  },
})
