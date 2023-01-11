import Main from "../pages/Main";
import Settings from "../pages/Settings";
import Todo from "../pages/Todo";

const subUrl = "";
export const publicRoutes = [
  { path: subUrl + "/", element: () => <Main /> },
  { path: subUrl + "/settings", element: () => <Settings /> },
  { path: subUrl + "/todos", element: () => <Todo /> },
];
