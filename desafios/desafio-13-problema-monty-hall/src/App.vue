<template>
  <div id="app">
    <h1>Problema de Monty Hall</h1>

    <div class="form">
      <div v-if="!started">
        <label for="portsAmount">Quantas portas?</label>
        <input
          type="text"
          id="portsAmount"
          size="3"
          v-model.number="portsAmount"
        />
      </div>
      <div v-if="!started">
        <label for="portsAmount">Qual porta é premiada?</label>
        <input
          type="text"
          id="selectedPort"
          size="3"
          v-model.number="selectedPort"
        />
      </div>
      <button v-if="!started" @click="started = true">Iniciar</button>
      <button v-if="started" @click="started = false">Reiniciar</button>
    </div>

    <div class="doors" v-if="started">
      <div v-for="port in portsAmount" :key="port">
        <Door :hasGift="port === selectedPort" :number="port" />
      </div>
    </div>
  </div>
</template>

<script>
import Door from "./components/Door.vue";

export default {
  name: "App",

  components: { Door },

  data() {
    return {
      started: false,
      portsAmount: 3,
      selectedPort: null
    };
  }
};
</script>


<style>
* {
  box-sizing: border-box;
  font-family: "Courier New", Courier, monospace, sans-serif;
}

body {
  color: azure;
  background: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app h1 {
  border: 1px solid #000;
  background-color: #0004;
  padding: 20px;
  margin-bottom: 60px;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

.form,
.form input,
.form button {
  margin-bottom: 10px;
  font-size: 2rem;
}

.doors {
  align-self: stretch;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>