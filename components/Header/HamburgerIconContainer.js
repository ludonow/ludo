import { connect } from 'react-redux';
import HamburgerIcon from './HamburgerIcon';
import {
  getIsNavbarVisible,
  toggleNavbar,
} from '../../routes/UI/modules/navbar';

const mapStateToProps = state => ({
  isNavbarVisible: getIsNavbarVisible(state),
});

const mapDispatchToProps = dispatch => ({
  handleNavbarToggle: () => {
    dispatch(toggleNavbar());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerIcon);
