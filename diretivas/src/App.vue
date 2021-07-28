<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr />
    <p v-destaque>Usando Custom Diretiva sin Binding</p>
    <p v-destaque="'green'">Usando Custom Diretiva con Binding</p>
    <p v-destaque="cor">Usando Custom Diretiva</p>

    <hr />
    <!-- <p v-nome:argumento.modificador1,modificador2="'valor'"></p> -->
    <p v-destaque-local="'yellow'">Usando Custom Diretiva Local</p>
    <p v-destaque:fundo="'yellow'">Usando Custom Diretiva, Argumento</p>
    <p v-destaque="'DodgerBlue'">Usando Custom Diretiva</p>
    <p v-destaque:fundo.atrasar="'#336699'">Usando Custom Diretiva, Argumento</p>
  </div>
</template>

<script>
export default {
  directives: {
    "destaque-local": {
      bind(el) {
        el.style.backgroundColor = "orange"
      },
    },
  },
  data() {
    return {
      cor: "IndianRed",
    }
  },
}
</script>

<style>
body {
  background-color: #192734;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e4e6eb;
  margin-top: 60px;
  font-size: 1.5rem;
}
</style>
