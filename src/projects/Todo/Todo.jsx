import "./Todo.css";
// import { MdCheck, MdDeleteForever } from "react-icons/md";
import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";


export const Todo = () => {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;

    if (task.includes(inputValue)) return;

    setTask((prev) => [...prev, inputValue]);
  };

  //todo Date and Time

  //handletododelete function
  const handleDeleteTodo = (value) => {
    console.log(task);
    console.log(value);
    const updatedTask = task.filter((curTask) => curTask !== value);
    setTask(updatedTask);
  };

  //handleClearbutton function
  const handleClearButton = () => {
    setTask([]);
  };

  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
          <TodoDate />
        </header>
        <TodoForm onAddTodo={handleFormSubmit} />
        <section className="myUnOrdList">
          <ul>
            {task.map((curTask, index) => {
              return (
                <TodoList
                  key={index}
                  data={curTask}
                  onHandleDeleteTodo={handleDeleteTodo}
                  onHandleCheckedTodo={handleCheckedTodo}
                />
              );
            })}
          </ul>
        </section>
        <section>
          <button className="clear-btn" onClick={handleClearButton}>
            Clear All
          </button>
        </section>
      </section>
    </>
  );
};
