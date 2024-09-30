import { createBrowserRouter } from "react-router-dom";
import { Register } from "../routes/register/register";
import { Login } from "../routes/login/login";
import { Todolist } from "../routes/todo-list/todo-list";
export const router = createBrowserRouter([
  { path: "/", element: <h1>主頁面</h1> },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "todo-list", element: <Todolist /> },
  { path: "*", element: <h1>404</h1> },
]);
