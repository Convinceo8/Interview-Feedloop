import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodolist, fetchTodolists } from "../store/actions/actionCreator";
import { Link } from "react-router-dom";

function Todolist() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.todolist);


  const handleDelete = (id) => {
    dispatch(deleteTodolist(id));
  };
  
  useEffect(() => {
    dispatch(fetchTodolists());
  }, [dispatch]);

  return (
    <>
      <Link to="/todolist/add">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4">
          Create New Item
        </button>
      </Link>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th>Things to do</th>
          </tr>
        </thead>
        <tbody>
          {data.map((todolist) => (
            <tr key={todolist.id}>
              <td>{todolist.task}</td>
              <td>
                <button onClick={() => handleDelete(todolist.id)}>Delete</button>
              </td>
              <Link
                  to={`/todolist/${todolist.id}/edit`}
                  className="text-neutral-800 hover:text-neutral-900"
                >
                  Edit
                </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Todolist;
