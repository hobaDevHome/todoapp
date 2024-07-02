import React from "react";
import "./TodoItem.css";

function TodoItem({ task, onRemove, onToggle }) {
  return (
    <li className={`todo-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => onToggle(task.id)}>{task.text}</span>
      <button onClick={() => onRemove(task.id)}>Remove</button>
    </li>
  );
}

export default TodoItem;
