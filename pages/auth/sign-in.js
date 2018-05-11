import React from 'react';
import withRedux from 'next-redux-wrapper';
import configureStore from '../../store/createStore';
import withLayout from '../../hocs/withLayout';
import { show } from '../../utils/lock';

const CONTAINER_ID = 'put-lock-here';

class SignIn extends React.Component {
  componentDidMount() {
    show(CONTAINER_ID);
  }

  render() {
    return (
      <div id={CONTAINER_ID} />
    );
  }
}

const SignInPage = withLayout(SignIn);

export default withRedux(configureStore)(SignInPage);
