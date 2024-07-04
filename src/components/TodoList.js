import React from "react";
import TodoItem from "./TodoItem";
import { motion } from "framer-motion";
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
            <span className="todosSectionCount">
              {`(${incompleteTodos.length})`}{" "}
              {incompleteTodos.length > 1 ? "Tasks" : "Task"}
            </span>
          </p>
        </div>
      )}

      <ul className="todo-list incomplete">
        {incompleteTodos.map((todo) => (
          <motion.div
            key={todo.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <TodoItem todo={todo} onRemove={onRemove} onToggle={onToggle} />
          </motion.div>
        ))}
      </ul>
      {completeTodos.length > 0 && (
        <div className="todosSectionTitle completedTilte">
          <p className="todosSectionText">
            Completed
            <span className="todosSectionCount">
              {`(${completeTodos.length})`}
              {completeTodos.length > 1 ? "Tasks" : "Task"}
            </span>
          </p>
        </div>
      )}

      <ul className="todo-list complete">
        {completeTodos.map((todo) => (
          <motion.div
            key={todo.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <TodoItem todo={todo} onRemove={onRemove} onToggle={onToggle} />
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
