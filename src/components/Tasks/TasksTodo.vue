<template>
  <q-list
    bordered
    v-if="Object.keys(tasksTodo).length"
    separator>
    <task
      v-for="(task,key) in tasksTodo"
      :key="key"
      :task="task"
      :id="key"></task>
  </q-list>
</template>

<script>
    import Task from "src/components/Tasks/Task";

    export default {
        name: 'tasks-todo',
        components: {Task},
        data() {
            return {}
        },
        props: ['tasksTodo']
    }
</script>
