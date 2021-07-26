<template>
  <div class="task" :class="stateClass">
    <span class="close">x</span>
    <p>{{ task.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      require: true,
    },
  },

  data() {
    return {
      key: 'value',
    };
  },

  computed: {
    stateClass() {
      return {
        pending: this.task.pending,
        done: !this.task.pending,
      };
    },
  },
};
</script>

<style scoped>
.task {
  position: relative;
  box-sizing: border-box;
  width: 200px;
  height: 75px;
  padding: 10px;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 300;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-content: center;
}

.pending {
  border-left: 12px solid red;
  background-color: #f44336;
  color: whitesmoke;
}

.done {
  border-left: 12px solid #0a8f08;
  background-color: #4caf50;
  color: whitesmoke;
  text-decoration: line-through;
}

.pending .close {
  background-color: #b73229;
}

.done .close {
  background-color: #0a8f08;
}

.close {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  width: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}
</style>
