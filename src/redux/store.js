import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../components/Filters/FilterSlice";
import todoSlice from "../components/TodoList/TodoSlice";

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todos: todoSlice.reducer,
  },
});

export default store;
