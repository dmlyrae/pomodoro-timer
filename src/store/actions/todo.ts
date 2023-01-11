import { todoActions } from "../vars/todo";
import { Dispatch } from "redux";

export const addTodo = (workName: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: todoActions.add,
      payload: workName,
    });
    dispatch({
      type: todoActions.next,
      payload: "_no_",
    });
  };
};
export const removeTodo = (workName: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: todoActions.remove,
      payload: workName,
    });
    dispatch({
      type: todoActions.next,
      payload: "_no_",
    });
  };
};
export const setCurrrentTodo = (newTask: string) => {
  console.log(newTask);
  return (dispatch: Dispatch) => {
    dispatch({
      type: todoActions.setCurrent,
      payload: newTask,
    });
  };
};
export const nextTodo = (prev: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: todoActions.next,
      payload: prev,
    });
  };
};
export const clearTodo = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: todoActions.clear,
    });
  };
};
