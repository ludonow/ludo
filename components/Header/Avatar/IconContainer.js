import { connect } from 'react-redux';
import Icon from './Icon';
import { getAuthenticatedStatus } from '../../../routes/Login/modules/auth';
import { getPhotoUrl } from '../../../routes/Login/modules/user';

const mapStateToProps = state => ({
  isLoggedIn: getAuthenticatedStatus(state),
  userPhotoUrl: getPhotoUrl(state),
});

export default connect(mapStateToProps)(Icon);
