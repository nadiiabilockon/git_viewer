import React from "react";
import {
  Switch,
  Route,
  useParams,
  useHistory,
  useRouteMatch
} from "react-router-dom";
import { Card } from "react-bootstrap";
import { TiArrowBackOutline } from "react-icons/ti";

import InfoList from "./InfoList";
import BranchMain from "../BranchDetails/BranchMain";

export default function Info() {
  const renderInfoList = () => {
    return <InfoList />;
  };

  const renderBranches = () => {
    return <BranchMain />;
  };

  const error = () => {
    return <div>Not correct path.</div>;
  };

  const history = useHistory();
  const { info } = useParams<any>();
  const { path } = useRouteMatch();

  return (
    <Card>
      <Card.Header>
        <Card.Title>
          <a
            className="back-link"
            onClick={() => history.goBack()}
            title="Go back"
          >
            <TiArrowBackOutline />
          </a>{" "}
          <span>{info.replace(/^\w/, (c: string) => c.toUpperCase())}</span>
        </Card.Title>
      </Card.Header>
      <Switch>
        <Route path={path} render={renderInfoList} exact />
        <Route path={`${path}/:repo/branches`} render={renderBranches} />
        <Route render={error} />
      </Switch>
    </Card>
  );
}
