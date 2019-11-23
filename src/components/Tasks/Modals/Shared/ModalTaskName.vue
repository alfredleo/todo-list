<template>
  <div class="row q-mb-sm">
    <q-input outlined
             clearable
             class="col"
             :value="name"
             @input="$emit('update:name', $event)"
             :rules="[val => !!val || 'Field is required']"
             ref="name"
             autofocus
             label="Task name"/>
  </div>
</template>

<script>
    export default {
        name: 'ModalTaskName',
        props: ['name'],
        data() {
            return {}
        }
    }
</script>
