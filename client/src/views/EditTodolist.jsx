import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AddTodolist from "./AddTodolist";

function EditTodolist() {
  const { id } = useParams();
  const todolist = useSelector((state) => state.todolist.data);
  const initialTodolist = todolist.find((task) => task.id === parseInt(id));

  return (
    <div>
      <AddTodolist initialTodolist={initialTodolist} />
    </div>
  );
}

export default EditTodolist;