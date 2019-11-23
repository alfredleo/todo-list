<template>
  <q-item
    @click="updateTask({id:id, updates:{completed:!task.completed}})"
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    clickable
    v-ripple
  >
    <q-item-section side top>
      <q-checkbox :value="task.completed" class="no-pointer-events"/>
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{'text-strikethrough': task.completed}">{{task.name}}</q-item-label>
    </q-item-section>

    <q-item-section
      v-if="task.dueDate"
      side>
      <div class="row">
        <div class="column justify-center">
          <q-icon name="event" size="18px" class="q-mr-xs"/>
        </div>
        <div class="column">
          <q-item-label class="row justify-end" caption>{{task.dueDate}}</q-item-label>
          <q-item-label class="row justify-end" caption>
            <small>{{task.dueTime}}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-btn flat round color="primary" icon="edit" dense @click.stop="showEditTask = true"/>
        <q-btn flat round color="red" icon="delete" dense @click.stop="promptToDelete(id)"/>
      </div>
    </q-item-section>

    <q-dialog v-model="showEditTask">
      <edit-task @close="showEditTask = false"></edit-task>
    </q-dialog>

  </q-item>
</template>

<script>
    import {mapActions} from "vuex";
    import EditTask from "./Modals/EditTask";

    export default {
        components: {EditTask},
        props: ["task", "id"],
        data() {
            return {
                showEditTask: false,
            }
        },
        methods: {
            // spread operator, another usage is rest operator
            ...mapActions("tasks", ["updateTask", "deleteTask"]),
            promptToDelete(id) {
                this.$q
                    .dialog({
                        title: "Confirm",
                        message: "Really delete?",
                        cancel: true,
                        persistent: true
                    })
                    .onOk(() => {
                        this.deleteTask(id)
                    });
            }
        }
    };
</script>

<style>
</style>
