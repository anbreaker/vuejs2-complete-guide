<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <p><strong>Código:</strong> {{ id }}</p>
    <!-- <router-link tag="button" primario :to="`/usuario/${id}/editar`"> -->
    <router-link
      tag="button"
      primario
      :to="{
        name: 'editarUsuario',
        params: { id },
        query: { completo: true, lingua: 'pt' },
        hash: '#rodape',
      }"
    >
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  beforeRouteEnter(to, from, next) {
    console.log("dentro do component -> usuário detalhe");
    next();
  }
};
</script>

<style lang="scss" scoped>
</style>