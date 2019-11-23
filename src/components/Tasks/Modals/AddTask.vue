<template>
  <q-card>
    <modal-header>Add Task</modal-header>

    <q-form @submit="submitForm">
      <q-card-section>
        <modal-task-name :name.sync="taskToSubmit.name"/>

        <modal-task-due-date :dueDate.sync="taskToSubmit.dueDate"/>

        <modal-task-due-time :dueTime.sync="taskToSubmit.dueTime" v-if="taskToSubmit.dueDate"/>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          label="Save"
          color="primary"
          type="submit"/>
      </q-card-actions>
      <pre>{{taskToSubmit}}</pre>
    </q-form>
  </q-card>
</template>

<script>
    import {mapActions} from 'vuex'
    import ModalHeader from "./Shared/ModalHeader";
    import ModalTaskName from "./Shared/ModalTaskName";
    import ModalTaskDueDate from "./Shared/ModalTaskDueDate";
    import ModalTaskDueTime from "./Shared/ModalTaskDueTime";

    export default {
        name: 'add-task',
        components: {ModalTaskDueTime, ModalTaskDueDate, ModalTaskName, ModalHeader},
        data() {
            return {
                taskToSubmit: {
                    name: "",
                    dueDate: "",
                    dueTime: "",
                    completed: false
                }
            }
        },
        methods: {
            ...mapActions('tasks', ['addTask']),
            submitForm() {
                this.addTask(this.taskToSubmit);
                this.$emit('close')
            },
        }
    }
</script>
