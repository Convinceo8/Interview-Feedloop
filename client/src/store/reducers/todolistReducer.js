import { FETCH_TODOLIST, DELETE_TODOLIST, CREATE_TODOLIST, UPDATE_TODOLIST } from "../actions/actionType";

const initialState = {
    data: [],
    detail: {},
};

function todolistReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TODOLIST:
            return {
                ...state,
                data: action.payload,
            };
        case DELETE_TODOLIST:
            return {
                ...state,
                data: state.data.filter((todolist) => todolist.id !== action.payload),
            };
        case CREATE_TODOLIST:
            return {
                ...state,
                data: [...state.data, action.payload],
            };
        case UPDATE_TODOLIST:
            return {
                ...state,
                data: state.data.map((todolist) =>
                    todolist.id === action.payload.id ? action.payload : todolist
                ),
            };
        default:
            return state;
    }
}

export default todolistReducer;