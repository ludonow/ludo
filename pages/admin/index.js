import withRedux from 'next-redux-wrapper';

import configureStore from '../../store/createStore';
import withLayout from '../../hocs/withLayout';

import PublishedTemplate from '../../routes/admin/PublishedTemplate';

export default withRedux(configureStore)(withLayout(PublishedTemplate));
