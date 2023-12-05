import { FETCH_TODOLIST, DELETE_TODOLIST, CREATE_TODOLIST, UPDATE_TODOLIST } from "../actions/actionType";



const defaultReducer = (state =[], action) => {

    switch (action.type) {
        case 'FETCH_TODOLIST':
            return {
                ...state, 
                data:action.payload
            };
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}
export default defaultReducer;