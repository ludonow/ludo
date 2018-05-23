import withRedux from 'next-redux-wrapper';
import configureStore from '../../store/createStore';
import withLayout from '../../hocs/withLayout';
import Group from '../../routes/Group';

const Page = withLayout(Group);

export default withRedux(configureStore)(Page);
