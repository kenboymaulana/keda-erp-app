import { Navigate, useRoutes } from "react-router-dom";
import Page404 from "../pages/Page404";
import { PublicRoutes } from "./PublicRoutes";
import { MainRoutes } from "./MainRoutes";

export default function Routes() {
  return useRoutes([
    ...PublicRoutes,
    ...MainRoutes,
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
    {
      path: "404",
      element: <Page404 />,
    },
  ]);
}
