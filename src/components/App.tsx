import React, { Component, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Loader from "./Loader";
import NavBar from "./NavBar";

const DashboardMain = React.lazy(() => import("./Main"));
const InfoList = React.lazy(() => import("./InfoList"));
const Commits = React.lazy(() => import("./Commits"));
const BranchesDiff = React.lazy(() => import("./BranchesDiff"));

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
              path="/git_viewer/:owner/:repo/compare/branches" exact={true} component={BranchesDiff}
            />
            <Route
              path="/git_viewer/:owner/:info/:repo" exact={true} component={Commits}
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

export default App;
