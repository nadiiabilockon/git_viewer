import React from 'react';

const DashboardMain = React.lazy(() => import("./components/Main"));
const User = React.lazy(() => import("./components/User"));

const route = [
  { path: "/", exact: true, name: "User", component: User },
  { path: "/user", exact: true, name: "User", component: User }
];

export default route;