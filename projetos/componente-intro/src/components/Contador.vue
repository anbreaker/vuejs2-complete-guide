<template>
  <div class="contador">
    {{ contador }}
    <button @click="adicionar">+</button>
    <button @click="subtrair">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0,
    };
  },

  methods: {
    adicionar() {
      this.contador++;
    },

    subtrair() {
      this.contador--;
    },
  },
};
</script>

<style scoped>
.contador span {
  border-bottom: 1px solid #ccc;
  height: 30px;
  padding: 5px 25px;
}

.contador button {
  height: 30px;
  width: 30px;
  border-radius: 5px;
  background-color: coral;
  color: whitesmoke;
  margin-left: 10px;
  outline: none;
}
</style>
