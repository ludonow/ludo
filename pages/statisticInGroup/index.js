import withRedux from 'next-redux-wrapper';
import configureStore from '../../store/createStore';
import withLayout from '../../hocs/withLayout';
import StatisticInGroup from '../../routes/StatisticInGroup';

const Page = withLayout(StatisticInGroup);

export default withRedux(configureStore)(Page);
