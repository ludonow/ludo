import withRedux from 'next-redux-wrapper';

import configureStore from '../store/createStore';
import withApp from '../hoc/withApp';
import Search from '../routes/Search';

export default withRedux(configureStore)(withApp(Search));
