import { connect } from 'react-redux';
import DropDownMenu from './DropDownMenu';
import { getAuthenticatedStatus } from '../../../routes/Auth/modules/auth';

const mapStateToProps = state => ({
  isAuthenticated: getAuthenticatedStatus(state),
});

export default connect(mapStateToProps)(DropDownMenu);
