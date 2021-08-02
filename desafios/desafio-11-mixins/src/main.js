import Vue from 'vue'

import App from './App.vue'

Vue.config.productionTip = false

//Filtro Global
Vue.filter('contarPalavras', (valor) => {
  return valor.split(' ').map(palabra => `${palabra} (${palabra.length})`).join(' ')
})

new Vue({
  render: h => h(App),
}).$mount('#app')
