<template>
  <div class="calculator">
    <Display :value="displayValue" />
    <Button label="AC" triple @clickInCalculator="clearMemory" />
    <Button label="/" operation @clickInCalculator="setOperation" />
    <Button label="7" @clickInCalculator="addDigit" />
    <Button label="8" @clickInCalculator="addDigit" />
    <Button label="9" @clickInCalculator="addDigit" />
    <Button label="*" operation @clickInCalculator="setOperation" />
    <Button label="4" @clickInCalculator="addDigit" />
    <Button label="5" @clickInCalculator="addDigit" />
    <Button label="6" @clickInCalculator="addDigit" />
    <Button label="-" operation @clickInCalculator="setOperation" />
    <Button label="1" @clickInCalculator="addDigit" />
    <Button label="2" @clickInCalculator="addDigit" />
    <Button label="3" @clickInCalculator="addDigit" />
    <Button label="+" operation @clickInCalculator="setOperation" />
    <Button label="0" double @clickInCalculator="addDigit" />
    <Button label="." @clickInCalculator="addDigit" />
    <Button label="=" operation @clickInCalculator="setOperation" />
  </div>
</template>

<script>
import Button from "../components/Button";
import Display from "../components/Display";

export default {
  components: { Button, Display },

  data() {
    return {
      displayValue: "0",
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      currentPositionValues: 0
    };
  },

  methods: {
    clearMemory() {
      console.log("Limpar Memória!");
      Object.assign(this.$data, this.$options.data());
    },

    setOperation(operation) {
      if (this.currentPositionValues === 0) {
        this.operation = operation;
        this.currentPositionValues = 1;
        this.clearDisplay = true;
      } else {
        const equals = operation === "=";
        const currentOperation = this.operation;

        try {
          this.values[0] = eval(
            `${this.values[0]} ${currentOperation} ${this.values[1]}`
          );
        } catch (error) {
          this.$emit("onError", error);
        }

        this.values[1] = 0;
        this.displayValue = this.values[0];

        this.operation = equals ? null : operation;
        this.currentPositionValues = equals ? 0 : 1;

        this.clearDisplay = true;
      }
    },

    addDigit(digit) {
      if (digit === "." && this.displayValue.includes(".")) return;

      const clearDisplay = this.displayValue === "0" || this.clearDisplay;

      const currentValue = clearDisplay ? "" : this.displayValue;
      const valueToDisplay = currentValue + digit;

      this.displayValue = valueToDisplay;
      this.clearDisplay = false;
      this.values[this.currentPositionValues] = valueToDisplay;
    }
  }
};
</script>

<style>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>
