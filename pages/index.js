import withRedux from 'next-redux-wrapper';

import configureStore from '../redux/createStore';
import withApp from '../components/withApp';

import Main from '../components/Main';

export default withRedux(configureStore)(withApp(Main));
