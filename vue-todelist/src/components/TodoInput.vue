<template>
  <div>
    <input type="checkbox" :checked="isAllDone" @click="$emit('isAllDone')" />
    <input type="text" v-model.trim="text" @keyup.enter="addTodo" />
  </div>
</template>

<script>
export default {
  props: {
    // isAllDone: {
    //   type: Boolean,
    //   required: true,
    // },
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    addTodo() {
      if (this.text) {
        this.$emit("add-todo", {
          text: this.text,
          done: false,
        });
        this.text = "";
      }
    },
  },

  computed: {
    isAllDone() {
      return this.$store.state.todos.every((it) => it.done);
    },
  },
};
</script>
