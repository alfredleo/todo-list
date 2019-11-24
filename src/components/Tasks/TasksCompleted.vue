<template>
  <q-list
    bordered
    v-if="Object.keys(tasksCompleted).length"
    separator>
    <task
      v-for="(task,key) in tasksCompleted"
      :key="key"
      :task="task"
      :id="key"></task>
  </q-list>
</template>

<script>
    import Task from "src/components/Tasks/Task";

    export default {
        name: 'tasks-completed',
        components: {Task},
        data() {
            return {}
        },
        props: ['tasksCompleted']
    }
</script>
