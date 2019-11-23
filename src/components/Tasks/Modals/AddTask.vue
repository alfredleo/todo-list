<template>
  <q-card>
    <modal-header>Add Task</modal-header>

    <q-form @submit="submitForm">
      <q-card-section>
        <div class="row q-mb-sm">
          <q-input outlined
                   clearable
                   class="col"
                   v-model="taskToSubmit.name"
                   :rules="[val => !!val || 'Field is required']"
                   ref="name"
                   autofocus
                   label="Task name"/>
        </div>

        <div class="row q-mb-sm">
          <q-input
            label="Due date"
            outlined
            clearable
            v-model="taskToSubmit.dueDate">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="taskToSubmit.dueDate" @input="() => $refs.qDateProxy.hide()"/>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

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
    </q-form>
  </q-card>
</template>

<script>
    import {mapActions} from 'vuex'
    import ModalHeader from "./Shared/ModalHeader";

    export default {
        name: 'add-task',
        components: {ModalHeader},
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
