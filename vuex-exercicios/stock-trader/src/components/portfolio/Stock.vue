<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="blue darken-3 white--text">
      <v-card class="headline blue darken-3 white--text">
        <strong>
          {{ stockProp.name }}
          <small>
            (Preço: {{ stockProp.price | currency }} |
            {{ stockProp.quantity | currency }})
          </small>
        </strong>
      </v-card>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field
          :error="
            insufficientQuantity || !Number.isInteger(quantity) || quantity < 0
          "
          type="number"
          label="Quantidade"
          v-model.number="quantity"
        />
        <v-btn
          class="blue darken-3 white--text"
          :disabled="
            insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)
          "
          @click="sellStock"
          >{{ insufficientQuantity ? "Insuficiente" : "Venda" }}
        </v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stockProp"],

  data() {
    return {
      quantity: 0
    };
  },

  computed: {
    insufficientQuantity() {
      return this.quantity > this.stockProp.quantity;
    }
  },

  methods: {
    ...mapActions({ sellStockAction: "sellStock" }),

    sellStock() {
      const order = {
        stockId: this.stockProp.id,
        stockPrice: this.stockProp.price,
        quantity: this.quantity
      };

      // this.$store.dispatch("sellStock", order);
      this.sellStockAction(order);
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