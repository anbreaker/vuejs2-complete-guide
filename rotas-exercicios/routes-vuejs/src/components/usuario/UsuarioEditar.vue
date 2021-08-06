<template>
  <div class="usuario-editar">
    <h3>Usuário editar</h3>
    <p><strong>Código:</strong> {{ id }}</p>
    <p>
      <strong>Completo:</strong> {{ $route.query.completo ? "Sim" : "Nao" }}
    </p>
    <p><strong>Lingua:</strong> {{ $route.query.lingua }}</p>

    <hr />
    <button primario @click="confirmou = true">Confirmar</button>

    <div id="rodape">
      <h3>Curso VueJs2</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      confirmou: false
    };
  },

  beforeRouteLeave(to, from, next) {
    if (this.confirmou) next();
    else {
      if (confirm("Tem Certeza?")) next();
      else next(false);
    }
  }
};
</script>

<style scoped>
#rodape {
  margin-top: 2000px;
}
</style>