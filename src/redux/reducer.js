import filterReducer from "../components/Filters/FilterSlice";
import todoReducer from "../components/TodoList/TodoSlice";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  filters: filterReducer,
  todos: todoReducer,
});

export default rootReducer;
