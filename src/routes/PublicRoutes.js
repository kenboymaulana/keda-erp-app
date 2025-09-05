import LayoutLandingPage from "../pages/_layouts/landing-page";
import Login from "../pages/auth/sign-in";
import Home from "./../pages/home/index";

export const PublicRoutes = [
  {
    path: "/",
    element: <LayoutLandingPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
];
