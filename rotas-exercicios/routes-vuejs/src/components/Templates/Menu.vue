<template>
  <nav class="menu">
    <ul>
      <router-link to="/" tag="li" active-class="active" exact>
        <a>Inicio</a>
      </router-link>
      <router-link to="/usuario/1" tag="li" active-class="active" exact>
        <a>Usuario 1</a>
      </router-link>
      <router-link to="/usuario/2" tag="li" active-class="active" exact>
        <a>Usuario 2</a>
      </router-link>
      <router-link to="/usuario-param/p" tag="li" active-class="active" exact>
        <a>Usuario P</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>