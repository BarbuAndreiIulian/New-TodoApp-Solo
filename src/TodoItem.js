import React from "react";

function TodoItem(props) {
  return (
    <div>
      <h1>{props.info.text}</h1>
    </div>
  );
}

export default TodoItem;
