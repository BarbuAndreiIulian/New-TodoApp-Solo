import React from "react";

export default function TodoSetUp(props) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (x) => {
    x.preventDefault();

    props.post(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(y) => setValue(y.target.value)} />
      <button type="submit">AddTodo</button>
    </form>
  );
}
