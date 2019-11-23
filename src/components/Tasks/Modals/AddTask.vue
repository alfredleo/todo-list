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

    </q-form>
  </q-card>
</template>

<script>
    import {mapActions} from 'vuex'
    import ModalHeader from "src/components/Tasks/Modals/Shared/ModalHeader";
    import ModalTaskName from "src/components/Tasks/Modals/Shared/ModalTaskName";
    import ModalTaskDueDate from "src/components/Tasks/Modals/Shared/ModalTaskDueDate";
    import ModalTaskDueTime from "src/components/Tasks/Modals/Shared/ModalTaskDueTime";
    import ModalButtons from "src/components/Tasks/Modals/Shared/ModalButtons";

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
