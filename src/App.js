import React, { useState, useEffect } from "react";
import "./App.css";

// Importing components
import Form from "./components/Form";
import TodoList from "./components/todolist";

let today = new Date().toLocaleString("en-us", { weekday: "long" });

function App() {
    const [inputText, sentInputText] = useState("");
    const [todo, setTodo] = useState([]);
    const [status, setSelection] = useState("all");
    const [filtered, setfilterted] = useState([]);

    useEffect(() => {
        getLocalTasks();
    }, []);

    useEffect(() => {
        filterHandler();

        saveLocalTasks();
    }, [todo, status]);

    const filterHandler = () => {
        switch (status) {
            case "completed":
                setfilterted(todo.filter((task) => task.completed === true));
                break;
            case "uncompleted":
                setfilterted(todo.filter((task) => task.completed === false));
                break;
            default:
                setfilterted(todo);
                break;
        }
    };

    const saveLocalTasks = () => {
        localStorage.setItem("todo", JSON.stringify(todo));
    };

    const getLocalTasks = () => {
        if (
            localStorage.getItem("todo") === null ||
            JSON.parse(localStorage.getItem("todo")).length === 0
        ) {
            localStorage.setItem("todo", JSON.stringify([]));
        } else {
            let localTask = JSON.parse(localStorage.getItem("todo"));
            setTodo(localTask);
        }
    };

    return ( <
            div className = "App" >
            <
            header >
            <
            h1 > { `${today}` }
            `s Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todo={todo}
        setTodo={setTodo}
        sentInputText={sentInputText}
        setSelection={setSelection}
      />
      <TodoList filtered={filtered} setTodo={setTodo} todo={todo} />
    </div>
  );
}

export default App;