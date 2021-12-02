<template>
  <li>
    <input type="checkbox" :checked="isAllDone || todo.done" @click="toggle" />
    <span>{{ todo.text }}</span>
    <button>&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    isAllDone: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggle() {
      this.$emit("toggle-todo-status");
    },
  },
};
</script>
