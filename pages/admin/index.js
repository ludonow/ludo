import withRedux from 'next-redux-wrapper';

import configureStore from '../../store/createStore';
import withApp from '../../hoc/withApp';

import PublishedTemplate from '../../routes/admin/PublishedTemplate';

export default withRedux(configureStore)(withApp(PublishedTemplate));
