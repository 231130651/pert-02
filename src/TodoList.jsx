import React from "react";

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo, index) => (
        <li key={index}>
          <input type="checkbox"/>
          {todo}
          <button onClick={() => props.removeTodo(index)}>Hapus</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
