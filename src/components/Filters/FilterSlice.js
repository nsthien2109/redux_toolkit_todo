import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    filterSearchChange: (state, action) => {
      state.search = action.payload;
    },
    filterStatusChange: (state, action) => {
      state.status = action.payload;
    },
    filterPriorityChange: (state, action) => {
      state.priority = action.payload;
    },
  },
});
