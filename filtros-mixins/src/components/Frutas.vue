<template>
  <div>
    <ul>
      <li v-for="(fruta, i) in frutas" :key="i">{{ fruta }}</li>
    </ul>
    <input type="text" v-model="fruta" @keydown.enter="add" />
  </div>
</template>

<script>
import frutasMixin from "../mixins/frutasMixin";
import usuarioMixins from "../mixins/usuarioMixins";

export default {
  mixins: [frutasMixin, usuarioMixins],

  created() {
    console.log("Created - Frutas.vue");
  }
};
</script>

<style lang="scss" scoped>
</style>