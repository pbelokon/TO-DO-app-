import React from "react";

const Form = ({ sentInputText, todo, setTodo, inputText, setSelection }) => {
  const inputTextHandler = (e) => {
    sentInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodo([
      ...todo,
      {
        text: inputText,
        completed: false,
        id: "todo: " + Math.random() * 1000,
      },
    ]);
    sentInputText("");
  };
  const statusHandler = (e) => {
    setSelection(e.target.value);
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
