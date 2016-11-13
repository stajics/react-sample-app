import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// actions
// import { login as loginAction, fetchUser as fetchUserAction } from '../actions';
// components
import LoginForm from '../../../components/forms/LoginForm';

const propTypes = {
};

const defaultProps = {
  text: 'Login',
};

export class Login extends Component {
  render() {
    return (
      <div>
        <p>Sample App</p>
        <LoginForm />
      </div>
    );
  }
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

const stateToProps = state => ({
  title: state.home.title,
});

const dispatchToProps = dispatch => (
  bindActionCreators({
  //  login: loginAction,
  //  fetchUser: fetchUserAction,
  }, dispatch)
);

export default connect(stateToProps, dispatchToProps)(Login);
