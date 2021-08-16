<template>
  <div id="app">
    <h1>Problema Monty Hanll</h1>
    <Door number="1" hasGift="false" />
  </div>
</template>

<script>
import Door from "./components/Door.vue";

export default {
  name: "App",

  components: {
    Door
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
</style>
