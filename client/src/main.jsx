import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routers/router.jsx";
import store from "./store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

