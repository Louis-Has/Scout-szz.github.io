<template>
  <div>
    <span>{{ leftCount }} items left</span>
    <div>
      <label for=""><input type="radio" name="" id="" />All</label>
      <label for=""><input type="radio" name="" id="" />Active</label>
      <label for=""><input type="radio" name="" id="" />Completed</label>
    </div>
    <button v-if="hasCompleted">clear completed</button>
  </div>
</template>

<script>
export default {
  props: {
    // leftCount: {
    //   type: Number,
    //   required: true,
    // },
    hasCompleted: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    leftCount() {
      return this.$store.state.todos.filter((it) => !it.done).length;
    },
  },
};
</script>
