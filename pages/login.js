import withRedux from 'next-redux-wrapper';

import configureStore from '../redux/createStore';
import withApp from '../components/withApp';

import Login from '../components/Login';

export default withRedux(configureStore)(withApp(Login));
