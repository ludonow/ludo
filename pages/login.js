import withRedux from 'next-redux-wrapper';

import configureStore from '../store/createStore';
import withApp from '../hoc/withApp';
import Login from '../routes/Login';

export default withRedux(configureStore)(withApp(Login));
