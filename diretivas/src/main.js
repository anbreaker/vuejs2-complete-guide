import Vue from "vue"
import App from "./App.vue"

Vue.config.productionTip = false

Vue.directive("destaque", {
  bind(el, binding) {
    el.style.backgroundColor = "crimson"
    el.style.backgroundColor = binding.value

    let atraso = 0
    if (binding.modifiers["atrasar"]) {
      atraso = 3000

      setTimeout(() => {
        if (binding.arg === "fundo") {
          el.style.backgroundColor = "DarkCyan"
        } else {
          el.style.backgroundColor = binding.value
        }
      }, atraso)
    }
  },
})

new Vue({
  render: (h) => h(App),
}).$mount("#app")
