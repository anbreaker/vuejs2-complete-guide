<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr />
    <p>{{ cpfDoAluno | cpf }} Invertido: {{ cpfDoAluno | cpf | inverter }}</p>
    <p>{{ usuarioLogado }}</p>
    <input type="text" :value="cpfDoAluno | cpf" />
    <input type="text" :value="cpfDoAluno | cpf | inverter" />
    <hr />
    <Frutas></Frutas>
  </div>
</template>

<script>
import Frutas from "./components/Frutas.vue";
import frutasMixin from "./mixins/frutasMixin";
import usuarioMixins from "./mixins/usuarioMixins";

export default {
  components: {
    Frutas
  },

  mixins: [frutasMixin, usuarioMixins],

  filters: {
    cpf(valor) {
      const arr = valor.split("");
      arr.splice(3, 0, ".");
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");
      return arr.join("");
    }
  },

  data() {
    return {
      cpfDoAluno: "80088194785"
    };
  },

  created() {
    console.log("Created - App.vue");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}

input {
  font-size: 2rem;
}
</style>
