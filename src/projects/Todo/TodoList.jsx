import React from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({data , checked, onHandleDeleteTodo, onHandleCheckedTodo}) => {
  return (
    <>
      <li className="todo-item">
        <span className= {checked ? "check\List" : "notCheckList"}>{data}</span>
        <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
          <MdCheck />
        </button>
        <button
          className="delete-btn"
          onClick={() => onHandleDeleteTodo(data)}>
          <MdDeleteForever />
        </button>
      </li>
    </>
  );
};
