import { combineReducers } from "redux";
import { todoListReducer } from "./todo.reducer";



const rootReducer = combineReducers({
    
    todo: todoListReducer
})
export default rootReducer;