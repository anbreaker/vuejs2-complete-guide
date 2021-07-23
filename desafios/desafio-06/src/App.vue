<template>
  <v-app>
    <Menu />
    <Toolbar />

    <v-content>
      <Carousel />
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Carousel from './components/Carousel.vue';
import Footer from './components/Footer.vue';
import Menu from './components/Menu.vue';
import Toolbar from './components/Toolbar.vue';

export default {
  components: { Carousel, Footer, Menu, Toolbar },
};
</script>
