import Vue from 'vue'

import App from './App.vue'

Vue.config.productionTip = false

//Filtro Global
Vue.filter('inverter', (valor) => {
  return valor.split('').reverse().join('')
})

// Mixin Global
Vue.mixin({
  created() {
    console.log('Created - Mixin Global!')
  },
})

new Vue({
  render: h => h(App),
  created() {
    console.log('Created - Instace!')
  },
}).$mount('#app')
