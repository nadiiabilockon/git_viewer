import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import {Container} from 'react-bootstrap';

import Loader from './layout/Loader'
import routes from "../route";
import NavBar from "./layout/NavBar";

class App extends Component {
    render() {
        const menu = routes.map((route, index) => {
          return (route.component) ? (
              <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                      <route.component {...props} />
                  )} />
          ) : (null);
        });

        return (
                <Container>
                    <Suspense fallback={<Loader/>}>
                    <NavBar />
                        <Switch>
                            {menu}
                        </Switch>
                    </Suspense>
                </Container>
        );
    }
}

export default App;
