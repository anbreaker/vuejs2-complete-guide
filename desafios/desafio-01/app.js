new Vue({
  el: '#desafio',

  data: {
    nome: 'anbreaker',
    idade: 35,
    img: 'https://lenguajejs.com/vuejs/introduccion/que-es-vue/vuejs.png',
  },

  methods: {
    idadeVezes3() {
      return this.idade * 3;
    },

    random() {
      return Math.random();
    },
  },
});
