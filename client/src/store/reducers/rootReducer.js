import { combineReducers } from "redux";
import todolistReducer from "./todolistReducer";

const rootReducer = combineReducers({
    todolist: todolistReducer
});

export default rootReducer;
