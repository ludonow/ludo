import withRedux from 'next-redux-wrapper';
import configureStore from '../../store/createStore';
import withLayout from '../../hocs/withLayout';
import Statistic from '../../routes/Statistic';

const Page = withLayout(Statistic);

export default withRedux(configureStore)(Page);
