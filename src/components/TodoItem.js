import React from "react";

import { FaTrash, FaCheck, FaListUl } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import "./TodoItem.css";

function TodoItem({ todo, onRemove, onToggle }) {
  console.log("inside todo item", todo.id);
  return (
    <li
      className={`todo-item ${todo?.completed ? "completed" : "incompleted"}`}
      onClick={() => onToggle(todo.id)}
    >
      <div className="todo-data">
        <CiViewList className="list-icon" />
        <div className="todo-details">
          <p className="todo-title">{todo?.title}</p>
          <p className="todo-description">{todo?.description}</p>
        </div>
      </div>
      <div className="todo-item-icons">
        <div
          className="check-icon-bg"
          style={{ backgroundColor: !todo?.completed ? "#fff" : "#25d37f" }}
        >
          <FaCheck
            className="check-icon"
            onClick={() => onToggle(todo.id)}
            style={{ color: todo?.completed ? "green" : "grey" }}
          />
        </div>
        <FaTrash className="trash-icon" onClick={() => onRemove(todo.id)} />
      </div>
    </li>
  );
}

export default TodoItem;
