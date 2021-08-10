<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="green darken-3 white--text">
      <v-card class="headline green darken-3 white--text">
        <strong>
          {{ stockProp.name }} <small>(Preço: {{ stockProp.price }})</small>
        </strong>
      </v-card>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field
          type="number"
          label="Quantidade"
          v-model.number="quantity"
        />
        <v-btn
          class="green darken-3 white--text"
          :disabled="quantity <= 0 || !Number.isInteger(quantity)"
          @click="buyStock"
          >Comprar
        </v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ["stockProp"],

  data() {
    return {
      quantity: 0
    };
  },

  methods: {
    buyStock() {
      const order = {
        stockId: this.stockProp.id,
        stockPrice: this.stockProp.price,
        quantity: this.quantity
      };
      console.log(order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
strong {
  margin-left: 8px;
}
</style>