import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Root from "../pages/Root/Root";
import Home from "./../pages/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [{ index: true, path: "/", Component: Home }],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
