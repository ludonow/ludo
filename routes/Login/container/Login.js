// @flow
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { loginRequest } from '../modules/auth';
import LoginForm from '../components/LoginForm';

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = '必填';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '不是有效的 Email';
  }

  if (!values.password) {
    errors.password = '必填';
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.password)) {
    errors.password = '密碼必須大於8碼，至少有1個數字和1個英文字';
  }

  return errors;
};

const mapStateToProps = store => ({
  errorMessage: store.auth.errorMessage,
  isSubmitting: store.auth.isLoggingIn,
});

const mapDispatchToProps = dispatch => ({
  loginRequestAction: (accountInfo) => {
    dispatch(loginRequest(accountInfo));
  },
});

const ConnectedLoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

const ReduxFormConnectedLoginForm = reduxForm({
  form: 'login',
  validate,
})(ConnectedLoginForm);

export default ReduxFormConnectedLoginForm;
