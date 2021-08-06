<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <hr />
    <p><strong>Código:</strong> {{ id }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"]
};
</script>

<style lang="scss" scoped>
</style>