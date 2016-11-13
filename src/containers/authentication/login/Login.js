import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// components
import LoginForm from '../../../components/forms/LoginForm'; // eslint-disable-line

const propTypes = {
};

const defaultProps = {
  text: 'Login',
};

export class Login extends Component {
  render() {
    return (
      <div>
        <p />
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
  }, dispatch)
);

export default connect(stateToProps, dispatchToProps)(Login);
