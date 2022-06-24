import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todos",
  initialState: [
    { id: 1, name: "Learn Flutter", priority: "High", completed: true },
    { id: 2, name: "Learn React", priority: "Medium", completed: false },
    { id: 3, name: "Learn Redux", priority: "Low", completed: false },
    { id: 4, name: "Learn NodeJs", priority: "Medium", completed: false },
  ],
  reducers: {
    todoListAdd: (state, action) => {
      state.push(action.payload);
    },
    todoToggleCompleted: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});
