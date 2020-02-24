import React from 'react';

const DashboardMain = React.lazy(() => import("./components/Main"));
const InfoList = React.lazy(() => import("./components/InfoList"));
const Branch = React.lazy(() => import("./components/Branch"));

const route = [
  { path: "/git_viewer", exact: true, name: "Main", component: DashboardMain },
  {
    path: "/git_viewer/:owner/:info",
    exact: true,
    name: "InfoList",
    component: InfoList
  },
  {
    path: "/git_viewer/:owner/:info/:branch",
    exact: true,
    name: "Branch",
    component: Branch
  }
]; 

export default route;