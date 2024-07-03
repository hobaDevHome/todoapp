import React from "react";
import { FaTrash, FaCheck } from "react-icons/fa";
import "./TodoItem.css";

function TodoItem({ todo, onRemove, onToggle }) {
  console.log("inside todo item", todo.id);
  return (
    <li className={`todo-item ${todo?.completed ? "completed" : ""}`}>
      <div>
        <span
          style={{ textDecoration: todo?.completed ? "line-through" : "none" }}
          onClick={() => onToggle(todo.id)}
          className="todo-title"
        >
          {todo?.title}
        </span>
        <p className="todo-description">{todo?.description}</p>
      </div>
      <FaCheck
        className="check-icon"
        onClick={() => onToggle(todo.id)}
        style={{ color: todo?.completed ? "green" : "grey" }}
      />
      <FaTrash
        className="trash-icon"
        onClick={() => onRemove(todo.id)}
        style={{ color: "red" }}
      />
    </li>
  );
}

export default TodoItem;
