new Vue({
  el: '#desafio',

  data: {
    classe1: 'destaque',
    perigo: false,
    classe3: '',
    classe4: '',
    cor5: '',
    estilo5: {
      width: '50px',
      height: '20px',
    },
    width: '0',
  },

  methods: {
    iniciarEfeito() {
      setInterval(() => {
        this.classe1 = this.classe1 === 'destaque' ? 'encolher' : 'destaque';
      }, 1000);
    },

    iniciarProgresso() {
      console.log('entra');

      let valor = 0;
      const temporizador = setInterval(() => {
        valor += 5;
        this.width = `${valor}%`;
        console.log(this.width);

        if (valor === 100) clearInterval(temporizador);
      }, 50);
    },

    setPerigo({ target }) {
      if (target.value === 'true') this.perigo = true;
      else this.perigo = false;
    },
  },
});
