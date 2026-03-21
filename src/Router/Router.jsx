import { createBrowserRouter } from "react-router";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import NotFound from "../pages/NotFound/NotFound";
import Root from "../pages/Root/Root";
import Home from "./../pages/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("eightApps.json"),
        Component: Home,
      },
      { path: "/apps", Component: Apps },
      { path: "/installation", Component: Installation },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
