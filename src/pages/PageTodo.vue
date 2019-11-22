<template>
  <q-page class="q-pa-md">
    <q-list bordered separator>
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
      <add-task/>
    </q-dialog>

  </q-page>
</template>

<script>
    import {mapGetters} from "vuex";
    import AddTask from "../components/Tasks/Modals/AddTask";

    export default {
        data() {
            return {
                showAddTask: true
            }
        },
        computed: {
            ...mapGetters("tasks", ["tasks"])
        },
        components: {
            AddTask,
            task: require("components/Tasks/Task.vue").default
        }
    };
</script>

<style>
</style>
