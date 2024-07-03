import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onRemove, onToggle }) {
  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const completeTodos = todos.filter((todo) => todo.completed);

  return (
    <div>
      <h2>Todos</h2>
      <ul className="todo-list incomplete">
        {incompleteTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </ul>
      <h2>Completed</h2>
      <ul className="todo-list complete">
        {completeTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
