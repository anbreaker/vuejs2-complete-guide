<template>
  <div>
    <Rotulo nome="Nome">
      <input
        type="text"
        placeholder="Seu Nome"
        @input="alterarNome"
        :value="value.nome"
      />
    </Rotulo>

    <Rotulo nome="Sobrenome">
      <input
        type="text"
        placeholder="Seu Sobrenome"
        @input="alterarSobrenome"
        :value="value.sobrenome"
      />
    </Rotulo>
  </div>
</template>

<script>
import Rotulo from './Rotulo.vue';

export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },

  components: { Rotulo },

  methods: {
    alterarNome({ target }) {
      this.$emit('input', { nome: target.value, sobrenome: this.value.sobrenome });
    },
    alterarSobrenome({ target }) {
      this.$emit('input', { nome: this.value.nome, sobrenome: target.value });
    },
  },
};
</script>

<style scoped></style>
