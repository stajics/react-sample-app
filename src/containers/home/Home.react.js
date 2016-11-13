import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
// actions
import { setTitle } from './actions';
// components
import { Button } from 'react-bootstrap'; // eslint-disable-line

const propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
  setTitle: PropTypes.func,
};

const defaultProps = {
  text: 'Home',
};

export class Home extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
  }

  onChangeTitle() {
    this.props.setTitle('Home New Title');
  }

  render() {
    const { text, title } = this.props;
    return (
      <div>
        <p>Im the {text} component with title {title}</p>
        <Button
          onClick={this.onChangeTitle}
        >Change Title</Button>
        <Button
          onClick={() => { browserHistory.push('/'); }}
        >SETTINGS</Button>
      </div>
    );
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

const stateToProps = state => ({
  title: state.home.title,
});

const dispatchToProps = dispatch => (
  bindActionCreators({
    setTitle,
  }, dispatch)
);

export default connect(stateToProps, dispatchToProps)(Home);
