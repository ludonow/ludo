import { connect } from 'react-redux';
import DropDownMenu from './DropDownMenu';
import { logoutRequest } from '../../../routes/Login/modules/auth';

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  logoutRequestAction: () => {
    dispatch(logoutRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDownMenu);
