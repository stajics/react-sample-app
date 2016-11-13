import React, { PropTypes } from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { browserHistory } from 'react-router';
// components
import { FormGroup, FormControl, Button } from 'react-bootstrap';
// actions
import { login, fetchUser } from '../../containers/authentication/actions';

const propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  submitFailed: PropTypes.bool,
  error: PropTypes.string,
};

const getValidationState = (input, name, meta) => {
  if (meta.error && meta.touched) return 'error';
  if (!meta.error && meta.touched) return 'success';
  return null;
};

const renderTextField = ({ input, name, meta }) => // eslint-disable-line
  <FormGroup
    controlId={name}
    validationState={getValidationState(input, name, meta)}
  >
    <FormControl
      type={name === 'password' ? 'password' : 'text'}
      value={input.value}
      placeholder={name}
      onChange={input.onChange}
      onBlur={input.onBlur}
      onFocus={input.onFocus}
    />
    <FormControl.Feedback />
  </FormGroup>;

const submit = async (values, dispatch) => { // eslint-disable-line no-unused-vars, consistent-return, max-len
  try {
    const response = await login(values.username, values.password)(dispatch);
    if (response.error) throw response.payload.error;
    localStorage.setItem('authToken', response.payload.token);
    await fetchUser(response.payload.token)(dispatch);
    browserHistory.replace('/');
  } catch (err) {
    // Handle error
    throw new SubmissionError({ _error: err });
  }
};

export const LoginForm = ({ handleSubmit, submitting, submitFailed, error }) => (
  <form>
    <Field
      name="username"
      component={renderTextField}
    />
    <Field
      name="password"
      component={renderTextField}
    />
    <Button
      type="submit"
      disabled={submitting}
      onClick={handleSubmit(submit)}
    >LOGIN</Button>
    {
      submitFailed && error ? <p>BAD CREDENTIALS</p>
      : null
    }
  </form>
);

LoginForm.propTypes = propTypes;

const validate = (values, props) => {  // eslint-disable-line no-unused-vars
  const errors = {};
  if (!values.username) errors.username = 'username error';
  if (!values.password) errors.password = 'password error';
  return errors;
};

export default reduxForm({
  form: 'login',
  validate,
})(LoginForm);
