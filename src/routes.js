/* eslint import/no-named-as-default: 'off' */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
// components
import App from './containers/app/App';
import Home from './containers/home/Home';
import Login from './containers/authentication/login/Login';
import Profile from './containers/profile/Profile';

const requireAuth = (nextState, replaceState) => {
  if (!localStorage.getItem('authToken')) {
    replaceState('/login');
  }
};

const requireNotAuth = (nextState, replaceState) => {
  if (localStorage.getItem('authToken')) {
    replaceState('/');
  }
};

const redirectToHome = (nextState, replaceState) => { // redirect if no route match
  replaceState('/');
};

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} onEnter={requireAuth} />
    <Route path="profile" component={Profile} />
    <Route path="login" component={Login} onEnter={requireNotAuth} />
    <Route path="*" onEnter={redirectToHome} />
  </Route>
);

export default routes;
