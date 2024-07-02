import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, onRemove, onToggle }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}

export default TodoList;
