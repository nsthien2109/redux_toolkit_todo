export const addTodo = (data) => {
  return {
    type: "todos/todoListAdd",
    payload: data,
  };
};

export const searchChange = (text) => {
  return {
    type: "filters/filterSearchChange",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filters/filterStatusChange",
    payload: status,
  };
};

export const priorityFilterChange = (priorities) => {
  return {
    type: "filters/filterPriorityChange",
    payload: priorities,
  };
};

export const toggleTodoCompleted = (todoId) => {
  return {
    type: "todos/todoToggleCompleted",
    payload: todoId,
  };
};
