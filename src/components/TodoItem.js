import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.objeto.completed}
        onChange={() => props.handleChange(props.objeto.id)}
      />
      <p style={{ color: "red", backgroundColor: "blue", fontSize: "20px" }}>
        {props.objeto.text}
      </p>
    </div>
  );
}

export default TodoItem;
