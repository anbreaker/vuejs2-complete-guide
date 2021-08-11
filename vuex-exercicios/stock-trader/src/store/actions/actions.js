import Vue from "vue"

export default {
  loadData({ commit }) {
    Vue.prototype.$http.get("trader.json").then((response) => {
      const data = response.data

      console.log(data)

      if (data) {
        commit("setStocks", data.stocks)
        commit("setPortfolio", {
          funds: data.funds,
          stockPortfolio: data.stockPortfolio,
        })
      }
    })
  },
}
