<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr />
    <p v-destaque>Usando Custom Diretiva sin Binding</p>
    <p v-destaque="'green'">Usando Custom Diretiva con Binding</p>
    <p v-destaque="cor">Usando Custom Diretiva</p>

    <hr />
    <p v-destaque-local-pisca.alternar="'blue'">Usando Custom Diretiva Local Pisca</p>
    <p v-destaque-local-pisca:fundo.atrasar.alternar>Usando diretiva personalizada</p>
    <hr />

    <!-- <p v-nome:argumento.modificador1,modificador2="'valor'"></p> -->
    <p v-destaque-local-simple="'yellow'">Usando Custom Diretiva Local</p>
    <p v-destaque:fundo="'yellow'">Usando Custom Diretiva, Argumento</p>
    <p v-destaque="'DodgerBlue'">Usando Custom Diretiva</p>
    <p v-destaque:fundo.atrasar="'#336699'">Usando Custom Diretiva, Argumento</p>
  </div>
</template>

<script>
export default {
  directives: {
    "destaque-local-simple": {
      bind(el) {
        el.style.backgroundColor = "orange"
      },
    },
    "destaque-local-pisca": {
      bind(el, binding) {
        const aplicarCor = (cor) => {
          if (binding.arg === "fundo") {
            el.style.backgroundColor = cor
          } else {
            el.style.color = cor
          }
        }

        let atraso = 0
        if (binding.modifiers["atrasar"]) atraso = binding.value.atraso

        const cor1 = binding.value.cor1
        const cor2 = binding.value.cor2
        let corAtual = cor1

        setTimeout(() => {
          if (binding.modifiers["alternar"]) {
            setInterval(() => {
              corAtual = corAtual === cor1 ? cor2 : cor1
              aplicarCor(corAtual)
            }, binding.value.intervalo)
          } else {
            aplicarCor(binding.value)
          }
        }, atraso)
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
