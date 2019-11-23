<template>
  <q-page class="q-pa-md">
    <q-list
      bordered
      v-if="Object.keys(tasks).length"
      separator>
      <task
        v-for="(task,key) in tasks"
        :key="key"
        :task="task"
        :id="key"></task>
    </q-list>
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
    import Task from "src/components/Tasks/Task";

    export default {
        data() {
            return {
                showAddTask: false
            }
        },
        computed: {
            ...mapGetters("tasks", ["tasks"])
        },
        components: {Task, AddTask}
    };
</script>

<style>
</style>
