/* eslint import/no-named-as-default: 'off' */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
// components
import App from './containers/app/App';
import Home from './containers/home/Home.react';
import Login from './containers/authentication/login/Login.react';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="login" component={Login} />
  </Route>
);

export default routes;
