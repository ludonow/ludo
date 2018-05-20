import { connect } from 'react-redux';
import Navbar from './Navbar';
import { getIsNavbarVisible } from '../../routes/UI/modules/navbar';

const mapStateToProps = state => ({
  isNavbarVisible: getIsNavbarVisible(state),
});

export default connect(mapStateToProps)(Navbar);
