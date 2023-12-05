import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import Todolist from "../views/Todolist"


export const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        {
          path: "/",
          element: <Todolist />,
        }
      ],
    },
  ]);