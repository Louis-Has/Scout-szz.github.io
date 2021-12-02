import { useSelector, useDispatch } from "react-redux";

export default function TodoList() {
  let todos = useSelector((state) => state.todos);
  let dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo, idx) => (
        <li key={idx}>
          <input type="checkbox" checked={todo.done} />
          <span>{todo.text}</span>
          <button
            onClick={() => dispatch({ type: "deleteTodo", index: idx })}
          >
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
}
