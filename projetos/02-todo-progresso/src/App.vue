<template>
  <div id="app">
    <h1>Tarefas</h1>

    <NewTask @taskAdded="addTask" />
    <TaskGrid
      :tasks="tasks"
      @taskDeleted="deleteTask"
      @taskStateChanged="toggleTaskState"
    />
  </div>
</template>

<script>
import NewTask from './components/NewTask.vue';
import TaskGrid from './components/TaskGrid.vue';

export default {
  components: { TaskGrid, NewTask },

  data() {
    return {
      tasks: [],
    };
  },

  methods: {
    addTask({ name, pending }) {
      if (name) {
        const sameName = (task) => name === task.name;

        const reallyNew = this.tasks.filter(sameName).length === 0;

        if (reallyNew) this.tasks.push({ name, pending: pending || true });
        else alert('Esta tarea ya existe');
      }
    },

    deleteTask(idx) {
      this.tasks.splice(idx, 1);
    },

    toggleTaskState(idx) {
      this.tasks[idx].pending = !this.tasks[idx].pending;
    },
  },
};
</script>

<style>
body {
  font-family: 'Lato', sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
