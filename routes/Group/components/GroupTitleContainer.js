import { connect } from 'react-redux';
import Title from '../../../components/Title';
import {
  fetchSingleGroupRequest,
  getGroupInfo,
} from '../modules/singleGroup';

const mapStateToProps = state => ({
  title: getGroupInfo(state).title,
});

const mapDispatchToProps = dispatch => ({
  fetchInfoRequestAction: (id) => {
    dispatch(fetchSingleGroupRequest(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Title);
