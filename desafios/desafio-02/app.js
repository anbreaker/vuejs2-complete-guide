new Vue({
  el: '#desafio',

  data: {
    valor: '',
  },

  methods: {
    buttonAlerta() {
      alert('O botão foi clicado');
    },

    alterarValor(event) {
      this.valor = event.target.value;
    },
  },
});
