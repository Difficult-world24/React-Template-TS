import Dashboard from "../../pages/dashboard";
import Login from "../../pages/login";
import Register from "../../pages/register";
import { NavigationType } from "./types";

export const ApplicationUrls = {
  home: "/",
  login: "/login",
  register: "/register",
  notFound: "/",
};

export const ApplicationRoutes: NavigationType[] = [
  {
    path: ApplicationUrls.home,
    component: <Dashboard />,
  },

  {
    path: ApplicationUrls.login,
    component: <Login />,
  },

  {
    path: ApplicationUrls.register,
    component: <Register />,
  },
];
