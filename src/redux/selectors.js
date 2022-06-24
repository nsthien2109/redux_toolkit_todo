import { createSelector } from "reselect";

export const TodoListSelector = (state) => state.todos;
export const SearchTextSelector = (state) => state.filters.search;
export const statusSelector = (state) => state.filters.status;
export const priorityFilterSelector = (state) => state.filters.priority;
export const TodoListRemaining = createSelector(
  TodoListSelector,
  SearchTextSelector,
  statusSelector,
  priorityFilterSelector,
  (todoList, searchText, status, filterPriority) => {
    console.log(todoList, searchText, status);
    return todoList.filter((todo) => {
      if (status === "All") {
        return filterPriority.length
          ? todo.name.includes(searchText) &&
              filterPriority.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (filterPriority.length ? filterPriority.includes(todo.priority) : true)
      );
    });
  }
);
