<template>
  <q-card>
    <modal-header>Add Task</modal-header>

    <q-form @submit="submitForm">
      <q-card-section>
        <modal-task-name :name.sync="taskToSubmit.name"/>

        <modal-task-due-date :dueDate.sync="taskToSubmit.dueDate"/>

        <modal-task-due-time :dueTime.sync="taskToSubmit.dueTime" v-if="taskToSubmit.dueDate"/>
      </q-card-section>
      <modal-buttons/>
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
    import ModalButtons from "./Shared/ModalButtons";

    export default {
        name: 'add-task',
        components: {ModalButtons, ModalTaskDueTime, ModalTaskDueDate, ModalTaskName, ModalHeader},
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
