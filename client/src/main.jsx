import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routers/router.jsx";
import { createStore } from 'redux'
import defaultReducer from './store/reducers/rootReducer'
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={createStore(defaultReducer, {})}>
    <RouterProvider router={router} />
  </Provider>
);
