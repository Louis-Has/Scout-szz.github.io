<template>
  <div id="app">
    <TodoInput
      :is-all-done="isAllDone"
      @isAllDone="isAllDoneClick"
      @add-todo="todos.push($event)"
    />
    <TodoList
      :todos="todos"
      :isAllDone="isAllDone"
      @toggle-todo-status="toggleStatus"
    />
    <TodoStatus :leftCount="leftCount" :hasCompleted="hasCompleted" />
  </div>
</template>

<script>
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoStatus from "./components/TodoStatus.vue";

export default {
  name: "App",
  components: {
    TodoInput,
    TodoList,
    TodoStatus,
  },
  data() {
    return {
      show: "all",
      todos: [
        {
          text: "eat",
          done: true,
        },
        {
          text: "drink",
          done: false,
        },
        {
          text: "bread",
          done: true,
        },
      ],
      isAllDone: false,
    };
  },
  // computed: {
    // leftCount() {
    //   return this.todos.filter((it) => !it.done).length;
    // },
    // hasCompleted() {
    //   return this.todos.some((it) => it.done);
    // },
  // },
  methods: {
    toggleStatus(idx) {
      this.todos[idx].done = !this.todos[idx].done;
      this.isAllDone = this.checkIsAllDone();
    },
    checkIsAllDone() {
      return this.todos.length && this.todos.every((it) => it.done);
    },
    isAllDoneClick() {
      this.isAllDone = !this.isAllDone;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
