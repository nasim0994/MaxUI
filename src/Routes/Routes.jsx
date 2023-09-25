import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import DocLayout from "../Layout/DocLayout";
import GettingStarted from "../pages/Dcos/GettingStarted/GettingStarted";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/docs",
    element: <DocLayout />,
    children: [
      {
        path: "getting-started/documentation",
        element: <GettingStarted />,
      },
    ],
  },
]);
