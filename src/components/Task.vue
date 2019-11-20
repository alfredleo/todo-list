<template>
  <li>
    <div>
      <slot></slot>
      {{task.id}}
    </div>
    <small>{{task.dueDate}} @ {{task.dueTime}}</small>
    <button @click="deleteTask(index)">X</button>
  </li>
</template>

<script>
export default {
  props: ["task", "index", "tasks"],
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>

<style>
</style>