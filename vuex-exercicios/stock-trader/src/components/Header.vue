<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase mr-4">
      <span>Stock </span>
      <span class="font-weigth-ligth">Trader</span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat to="/">Inicio</v-btn>
      <v-btn flat to="/portfolio">Portfolio</v-btn>
      <v-btn flat to="/stocks">Ações</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat @click="endDay">Finalizar Dia</v-btn>
      <v-menu offset-y>
        <v-btn flat slot="activator">Salvar & Carregar</v-btn>
        <v-list>
          <v-list-tile @click="saveData">
            <v-list-tile-title>Salvar Dados</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="loadDataLocal">
            <v-list-tile-title> Carregar Dados </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-layout align-center>
        <span class="text-uppercase grey--text text--darken-2">
          Saldo: {{ funds | currency }}
        </span>
      </v-layout>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },

  methods: {
    ...mapActions(["randomizeStocks", "loadData"]),

    endDay() {
      this.randomizeStocks();
    },

    saveData() {
      const { funds, stockPortfolio, stocks } = this.$store.getters;

      // Save data on firebase!
      this.$http.put("trader.json", { funds, stockPortfolio, stocks });
    },

    loadDataLocal() {
      this.loadData();
    }
  }
};
</script>

<style scoped>
</style>