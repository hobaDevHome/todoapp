import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";
function TodoList({ todos, onRemove, onToggle }) {
  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const completeTodos = todos.filter((todo) => todo.completed);

  if (todos.length === 0) {
    return <div className="notodos">No tasks to display</div>;
  }

  return (
    <div>
      {incompleteTodos.length > 0 && (
        <div className="todosSectionTitle">
          <p className="todosSectionText">
            On going
            <spn className="todosSectionCount">
              {`(${incompleteTodos.length})`}{" "}
              {incompleteTodos.length > 1 ? "Tasks" : "Task"}
            </spn>
          </p>
        </div>
      )}

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
      {completeTodos.length > 0 && (
        <div className="todosSectionTitle completedTilte">
          <p className="todosSectionText">
            Completed
            <spn className="todosSectionCount">
              {`(${completeTodos.length})`}
              {completeTodos.length > 1 ? "Tasks" : "Task"}
            </spn>
          </p>
        </div>
      )}

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
