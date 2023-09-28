import React from "react";

export const TodoForm = () => {
  return (
    <form className="TodoFrom">
      <input
        type="text"
        className="todo-input"
        placeholder="What us the task today?"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
