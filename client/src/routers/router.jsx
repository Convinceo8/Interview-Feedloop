import { createBrowserRouter, RouterProvider, redirect , useNavigate } from "react-router-dom";
import App from "../App";
import Todolist from "../views/Todolist";
import AddTodolist from "../views/AddTodolist";
import EditTodolist from "../views/EditTodolist";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Todolist />,
      },
      {
        path: "/todolist/add",
        element: <AddTodolist />,
      },
      {
        path: "/todolist/:id/edit",
        element: <EditTodolist />,
      }, 
    ],
  },
]);