import React, { Component, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Loader from "./Loader";
import NavBar from "./NavBar";

const DashboardMain = React.lazy(() => import("./Main"));
const InfoList = React.lazy(() => import("./InfoList"));
const BranchCommits = React.lazy(() => import("./BranchCommits"));

class App extends Component {
  render() {

    return (
      <Container>
        <Suspense fallback={<Loader />}>
          <NavBar />
          <Switch>
            <Route
              path="/git_viewer" exact={true} component={DashboardMain}
            />
            <Route
              path="/git_viewer/:owner/:info" exact={true} component={InfoList}
            />
            <Route
              path="/git_viewer/:owner/:info/:branch" exact={true} component={BranchCommits}
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

export default App;
