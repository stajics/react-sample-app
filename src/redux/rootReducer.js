import { combineReducers } from 'redux';
// reducers
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import authentication from '../containers/authentication/reducer';
import home from '../containers/home/reducer';
// import profile from '../containers/profile/reducer';
// import settings from '../containers/settings/reducer';
// import flags from './reducers/flagsReducer';

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  authentication,
  home,
  // profile,
  // settings,
  // flags,
});
