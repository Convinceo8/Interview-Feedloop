import { FETCH_TODOLIST, CREATE_TODOLIST, UPDATE_TODOLIST, DELETE_TODOLIST } from "./actionType";

export const fetchTodolist = ()=> {
    return async(dispatch) => {
        try {
            const response = await fetch ("http://localhost:3000/todolist");
            const data = await response.json()

            dispatch({
                type: FETCH_TODOLIST,
                payload:data,
            })
        } catch (error) {
            console.log("Error fetching todolist", error);
        }
    }
}