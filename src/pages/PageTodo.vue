<template>
  <q-page class="q-pa-md">

    <tasks-todo :tasksTodo="tasksTodo"></tasks-todo>

    <hr>

    <tasks-completed :tasksCompleted="tasksCompleted"></tasks-completed>

    <div class="absolute-bottom text-center q-ma-lg">
      <q-btn
        @click="showAddTask = true"
        :key="55"
        glossy round
        color="primary"
        size="24px"
        icon="add"
      />
    </div>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false"/>
    </q-dialog>

  </q-page>
</template>

<script>
    import {mapGetters} from "vuex";
    import AddTask from "src/components/Tasks/Modals/AddTask";
    import TasksTodo from "src/components/Tasks/TasksTodo";
    import TasksCompleted from "src/components/Tasks/TasksCompleted";

    export default {
        data() {
            return {
                showAddTask: false
            }
        },
        computed: {
            ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"])
        },
        components: {TasksCompleted, TasksTodo, AddTask}
    };
</script>

<style>
</style>
