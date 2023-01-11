import { defaultState, todoActions } from "../vars/todo";

export const todoReducer = (
  state = defaultState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case todoActions.setCurrent:
      localStorage.currentWork = action.payload;
      return { ...state, currentWork: action.payload };
    case todoActions.add:
      localStorage.todoList = JSON.stringify([
        ...state.todoList,
        action.payload,
      ]);
      return { ...state, todoList: [...state.todoList, action.payload] };
    case todoActions.remove:
      const newList = state.todoList.filter(
        (td: string) => td !== action.payload
      );
      localStorage.todoList = JSON.stringify(newList);
      return {
        ...state,
        todoList: [...newList],
      };
    case todoActions.clear:
      localStorage.todoList = JSON.stringify([]);
      return { todoList: [], currentWork: "" };
    case todoActions.next:
      const id = state.todoList.indexOf(action.payload);
      if (id > -1 && action.payload !== "_no_") {
        localStorage.currentWork =
          state.todoList[(id + 1) % state.todoList.length];
        return {
          ...state,
          currentWork: state.todoList[(id + 1) % state.todoList.length],
        };
      }
      if (state.todoList.length > 0) {
        localStorage.currentWork = state.todoList[0];
        return { ...state, currentWork: state.todoList[0] };
      }
      return { ...state, currentWork: "" };
    default:
      return { ...state };
  }
};
