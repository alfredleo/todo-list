<template>
  <div
    class="row q-mb-sm">
    <q-input outlined
             clearable
             label="Due time"
             class="col"
             @input="$emit('update:dueTime', $event)"
             :value="dueTime">
      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time :value="dueTime" @input="$emit('update:dueTime', $event)"/>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
    export default {
        name: 'modal-task-due-time',
        data() {
            return {}
        },
        props: ['dueTime']
    }
</script>
