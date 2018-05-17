import { connect } from 'react-redux';
import Icon from './Icon';
import { getAuthenticatedStatus } from '../../../routes/Auth/modules/auth';
import { getPhotoUrl } from '../../../routes/Auth/modules/user';

const mapStateToProps = state => ({
  isLoggedIn: getAuthenticatedStatus(state),
  userPhotoUrl: getPhotoUrl(state),
});

export default connect(mapStateToProps)(Icon);
