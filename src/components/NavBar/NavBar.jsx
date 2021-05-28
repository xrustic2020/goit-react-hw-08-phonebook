import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import s from './NavBar.module.css';
import { authSelectors } from 'redux/auth';

import UserMenu from 'components/UserMenu';

const NavBar = ({ isAuthorization }) => {
  return (
    <nav className={s.nav}>
      <h1 className={s.logo}>Phonebook</h1>
      {isAuthorization && <UserMenu />}
    </nav>
  );
};

NavBar.propTypes = {
  isAuthorization: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthorization: authSelectors.getIsAuthorization(state),
});

export default connect(mapStateToProps)(NavBar);
