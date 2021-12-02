<template>
  <ul>
    <TodoItem
      v-for="(todo, idx) of todos"
      :key="idx"
      :todo="todo"
      :isAllDone="isAllDone"
      @toggle-todo-status="$emit('toggle-todo-status', idx)"
    />
  </ul>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoItem,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
    isAllDone: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
