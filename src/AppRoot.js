import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './redux/configureStore';
import routes from './routes';

const store = configureStore();
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

const AppRoot = () => (
  <Provider store={store}>
    <Router history={history}>
      { routes }
    </Router>
  </Provider>
);

export default AppRoot;
