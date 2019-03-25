import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';

import Home from '../screens/Home/Home';
import Pokedex from '../screens/Pokedex/Pokedex';

import history from './history';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 },
});


const Router = () => (
  <ConnectedRouter history={history}>
    <Route render={({ location }) => (
      <PoseGroup>
        <RouteContainer key={location.pathname}>
          <Switch location={location}>
            <Route exact path="/" render={(props) => <Home {...props} params="leticia" />} key="home" />
            <Route path="/pokedex" component={Pokedex} key="pokedex" />
          </Switch>
        </RouteContainer>
      </PoseGroup>
    )}
    />
  </ConnectedRouter>
);


export default Router;