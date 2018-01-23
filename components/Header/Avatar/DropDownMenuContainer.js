import { connect } from 'react-redux';
import DropDownMenu from './DropDownMenu';

const mapStateToProps = state => ({
  userId: state.auth.userId,
});

export default connect(mapStateToProps)(DropDownMenu);
