<template>
  <div class="usuario">
    <h2>Usuários</h2>
    <hr />
    <p><strong>Código:</strong> {{ id }}</p>
    <button sucesso @click="irParaInicio">Voltar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },

  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.id = to.params.id;
    }
  },

  methods: {
    irParaInicio() {
      // this.$router.push("/");
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>