import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import LoginLayout from "../layouts/LoginLayout";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            `https://bangla-recipes-server-akram-ul-hasan.vercel.app/chefs`
          ),
      },
      {
        path: "/chef/:id",
        element:  <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(
            `https://bangla-recipes-server-akram-ul-hasan.vercel.app/chef/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "login",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>,
  }
]);
export default router;
