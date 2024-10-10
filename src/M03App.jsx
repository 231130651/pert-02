import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import "./M03Style.css";

const M03App = () => {
  const [todos, setTodos] = useState({text: "Belajar React", completed: false});

const addTodo = (todo) => {
  setTodos([...todos, {text: todo, completed: false}]);
}; 

const removeTodo = (index) => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
};

const toggleComplete = (index) => {
  const newTodos = [...todos];
  newTodos[index].completed = ! newTodos[index].completed;
  setTodos(newTodos);
};

 
return (
  <div className="M03App">
    <h1>To-Do List</h1>
    <TodoInput addTodo={addTodo} />
    <TodoList todos={todos} removeTodo={removeTodo}
    toggleComplete={toggleComplete}
    />
  </div>
)};

export default M03App;
