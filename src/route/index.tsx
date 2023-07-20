import { createBrowserRouter } from "react-router-dom";
import Login from "../page/Login";
import Register from "../page/Register";
import Main from "../layout/Main";
import Books from "../page/Books";
import BookesDetails from "../page/BookesDetails";
import AddBook from "../page/AddBook";
import EditBook from "../page/EditBook";
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
        path: "book/:id",
        element: <BookesDetails />,
      },
      {
        path: "add-new-book",
        element: <AddBook />,
      },
      {
        path: "edit-book/:id",
        element: <EditBook />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
