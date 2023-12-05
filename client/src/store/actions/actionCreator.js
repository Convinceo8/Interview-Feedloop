import { FETCH_TODOLIST, CREATE_TODOLIST, UPDATE_TODOLIST, DELETE_TODOLIST } from "./actionType";

export const fetchTodolists = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3000/todolist");
      const data = await response.json();

      dispatch({
        type: FETCH_TODOLIST,
        payload: data,
      });
    } catch (error) {
      console.log("Error fetching tasks:", error);
    }
  };
};

export const deleteTodolist = (id) => {
  return async (dispatch) => {
    try {
      await fetch(`http://localhost:3000/todolist/${id}`, {
        method: "DELETE",
      });

      dispatch({
        type: DELETE_TODOLIST,
        payload: id,
      });
    } catch (error) {
      console.log("Error deleting task:", error);
    }
  };
};

export const addTodolist = (todolist) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3000/todolist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todolist),
      });
      const data = await response.json();

      dispatch({
        type: CREATE_TODOLIST,
        payload: data,
      });
    } catch (error) {
      console.log("Error adding task:", error);
    }
  };
};

export const updateTodolist = (id, updatedTodolist) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3000/todolist/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodolist),
      });
      const data = await response.json();

      dispatch({
        type: UPDATE_TODOLIST,
        payload: data,
      });
    } catch (error) {
      console.log("Error updating todolist:", error);
    }
  };
};
