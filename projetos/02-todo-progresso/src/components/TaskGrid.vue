<template>
  <div class="task-grid">
    <template v-if="tasks.length">
      <Task
        v-for="(task, idx) in tasks"
        :key="task.name"
        :task="task"
        @taskDeleted="$emit('taskDeleted', idx)"
        @taskStateChanged="$emit('taskStateChanged', idx)"
        >{{ task.name }}</Task
      >
    </template>
    <p v-else class="no-task">Sua vida está em dia 😀</p>
  </div>
</template>

<script>
import Task from './Task.vue';

export default {
  components: {
    Task,
  },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.task-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.task-grid .task {
  margin: 5px;
}

.no-task {
  color: #aaa;
  font-size: 1.5rem;
}
</style>
