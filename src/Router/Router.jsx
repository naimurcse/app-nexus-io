import { createBrowserRouter } from "react-router";
import Apps from "../pages/Apps/Apps";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Installation from "../pages/Installation/Installation";
import Root from "../pages/Root/Root";
import Home from "./../pages/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, path: "/", Component: Home },
      { path: "/apps", Component: Apps },
      { path: "/installation", Component: Installation },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
