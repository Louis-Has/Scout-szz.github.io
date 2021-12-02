import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        editingIdx: -1,
        show: 'all',
        lastId: 4,
        todos: [
            {
                text: "eat",
                done: true,
                id: 1,
            },
            {
                text: "drink",
                done: false,
                id: 2,
            },
            {
                text: "bread",
                done: true,
                id: 3,
            }],
    },
    mutations: { //变更方法
        addTodo(state, todo) {
            state.todos.push(todo)
            state.lastId++
        },
        edit(state, idx) {
            state.editingIdx = idx
        },
        // deleteTodo(state, idx) {

        // },
    },
    actions: {

    },
    modules: {

    },
});