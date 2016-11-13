import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
// components
import { Button } from 'react-bootstrap';
// actions
import { setTitle } from './actions';
import { logout as logoutAction } from '../authentication/actions';

const propTypes = {
  setTitle: PropTypes.func,
  logout: PropTypes.func,
};

const defaultProps = {
  text: 'Profile',
};

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.onPressLogout = this.onPressLogout.bind(this);
  }

  onPress() {
    this.props.setTitle('New Profile Title');
  }

  async onPressLogout() {
    const { logout } = this.props;
    logout();
    localStorage.removeItem('authToken');
    browserHistory.replace('/');
  }

  render() {
    return (
      <p>
        <Button
          onClick={this.onPressLogout}
        >LOGOUT</Button>
      </p>
    );
  }
}

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

const stateToProps = state => ({
  title: state.profile.title,
});

const dispatchToProps = dispatch => (
  bindActionCreators({
    setTitle,
    logout: logoutAction,
  }, dispatch)
);

export default connect(stateToProps, dispatchToProps)(Profile);
