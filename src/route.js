import React from 'react';

const DashboardMain = React.lazy(() => import("./components/Main"));
const InfoList = React.lazy(() => import("./components/InfoList"));

const route = [
  { path: "/", exact: true, name: "Main", component: DashboardMain },
  { path: "/user/info", exact: true, name: "InfoList", component: InfoList }
];

export default route;