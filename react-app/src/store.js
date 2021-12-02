import { createStore } from 'redux'
import { produce } from 'immer'


let initialState = {
    show: 'all',
    editingIdx: -1,
    todos: [{
        text: 'eat',
        done: true,
    }, {
        text: 'drink',
        done: false,
    }, {
        text: 'food',
        done: true,
    }]
}

let mutations = {
    addTodo(state, action) {
        // return produce(state, state => {
        state.todos.push({
            text: action.todoText,
            done: false
        })
        // })
    },
    deleteTodo(state, action) {
        state.todos.splice(action.index, 1)
    },
    setVisible(state, action) {
        // return produce(state, state => {
        state.show = action.visibleType
        // })
    },
    toggleOne(state, action) {
        // return produce(state, state => {
        let idx = action.index
        state.todos[idx].done = !state.todos[idx].done
        // })
    }

}



let store = createStore((state, action) => {
    let mutFunction = mutations[action.type]

    if (typeof mutFunction === 'function') {
        return produce(state, draft => {
            mutFunction(draft, action)
        })
    } else {
        return state
    }

}, initialState)

export default store
