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
  props: ["id"],

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