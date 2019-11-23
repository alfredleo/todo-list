<template>
  <q-card>
    <modal-header>Add Task</modal-header>

    <q-form @submit="submitForm">
      <q-card-section>
        <modal-task-name :name.sync="taskToSubmit.name"/>

        <modal-task-due-date :dueDate.sync="taskToSubmit.dueDate"/>

        <div
          v-if="taskToSubmit.dueDate"
          class="row q-mb-sm">
          <q-input outlined
                   clearable
                   label="Due time"
                   class="col"
                   v-model="taskToSubmit.dueTime">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="taskToSubmit.dueTime"/>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
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

    export default {
        name: 'add-task',
        components: {ModalTaskDueDate, ModalTaskName, ModalHeader},
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
