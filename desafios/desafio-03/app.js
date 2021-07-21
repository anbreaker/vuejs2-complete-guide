new Vue({
  el: '#desafio',

  data: {
    valor: 0,
  },

  computed: {
    alterarResultado() {
      return this.valor === 17 ? 'Valor igual a 17' : 'Valor Diferente a 17';
    },
  },

  watch: {
    alterarResultado() {
      setTimeout(() => {
        this.valor = 0;
      }, 1000);
    },
  },
});
