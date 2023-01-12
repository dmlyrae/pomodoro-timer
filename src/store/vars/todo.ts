export type TTodoState = {
  currentWork: "";
  todoList: string[];
};

export const defaultState: TTodoState = {
  currentWork: localStorage.currentWork
    ? localStorage.currentWork
    : ((localStorage.currentWork = ""), "add task"),
  todoList: localStorage.todoList
    ? JSON.parse(localStorage.todoList)
    : ((localStorage.todoList = JSON.stringify([])), []),
};

export const todoActions = {
  add: "ADD_TODO",
  remove: "REMOVE_TODO",
  clear: "CLEAR_TODOS",
  next: "NEXT_TODO",
  setCurrent: "SET_CURRENT",
};
