import React, { lazy } from "react";
import RouteController from "./routeController";
import { Redirect } from "react-router-dom";


const NewPassword = lazy(() => import("../pages/newPassword/newPassword"));
const Forgot = lazy(() => import("../pages/forgot/forgot"));
const Login = lazy(() => import("../pages/login/login"));
const Admin = lazy(() => import("../pages/admin/admin"));

const routes = [
  {
    path: "/",
    exact: true,
    render: (props) => <Redirect to="/login" />,
  },
  {
    path: "/new-password",
    exact: true,
    render: (props) => <NewPassword {...props} />,
  },
  {
    path: "/forgot",
    exact: true,
    render: (props) => <Forgot {...props} />,
  },
  {
    path: "/login",
    exact: true,
    render: (props) => <Login {...props} />,
  },
  {
    path: "/admin",
    render: (props) => <RouteController component={Admin} {...props} />,
  },
];

export default routes;
