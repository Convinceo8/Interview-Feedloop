import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addTodolist, updateTodolist } from "../store/actions/actionCreator";

function AddTodolist({ initialTodolist }) {
  const [task, setTask] = useState("");
  const [taskValid, setTaskValid] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setTaskValid(!!task);
    if (task) {
      if (initialTodolist) {
        dispatch(updateTodolist(initialTodolist.id, { task }));
      } else {
        dispatch(addTodolist({ task }));
      }
      setTask("");
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-4">
        <label htmlFor="task" className="block mb-2 font-semibold">
          Task
        </label>
        <input
          type="text"
          id="task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          className={`w-full p-2 border ${
            !taskValid ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`}
        />
        {!taskValid && (
          <p className="text-red-500 text-sm mt-1">Please enter a task</p>
        )}
      </div>
      <div className="flex justify-between">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {initialTodolist ? "Update Task" : "Add Task"}
        </button>
        <Link to="/">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Cancel
          </button>
        </Link>
      </div>
    </form>
  );
}

export default AddTodolist;
