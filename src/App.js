import React from "react";
import "./App.css";
import TodoItem from "./TodoItem";
import TodoSetUp from "./TodoSetUp";

export default function App() {
  const [listTodo, setlistTodo] = React.useState([]);
  let elements;
  const publishTodo = (x) => {
    let todo = {
      text: x,
      completed: false,
    };
    let newTodo = [todo, ...listTodo];
    setlistTodo(newTodo);
    console.log(listTodo);
  };

  elements = listTodo.map((el) => {
    return <TodoItem info={el} />;
  });

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoSetUp post={publishTodo} />
      {elements}
    </div>
  );
}
