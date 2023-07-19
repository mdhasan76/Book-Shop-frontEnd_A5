import { createBrowserRouter } from "react-router-dom";
import Login from "../page/Login";
import Register from "../page/Register";
import Main from "../layout/Main";
import Books from "../page/Books";
import BookesDetails from "../page/BookesDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Books />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "books/:id",
        element: <BookesDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
