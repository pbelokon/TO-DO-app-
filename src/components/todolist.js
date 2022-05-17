import React from "react";
import Todo from "./todo";

const TodoList = ({ todo, setTodo, filtered }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filtered.map((task) => (
          <Todo
            setTodo={setTodo}
            todos={todo}
            todo={task}
            key={task.id}
            text={task.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
