import withRedux from 'next-redux-wrapper';
import configureStore from '../store/createStore';
import withLayout from '../hocs/withLayout';
import Search from '../routes/Search';

const Page = withLayout(Search);

export default withRedux(configureStore)(Page);
