<template>
  <div class="contadores">
    <contador-tag v-for="c in 3" :key="c" />
  </div>
</template>

<script>
import Contador from './Contador.vue';

export default {
  components: { 'contador-tag': Contador },
};
</script>
