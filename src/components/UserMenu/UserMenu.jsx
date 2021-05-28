import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { authOperations, authSelectors } from 'redux/auth';

import s from './UserMenu.module.css';

const UserMenu = ({ userName, userEmail, logOut }) => {
  return (
    <div className={s.container}>
      <p className={s.welcome}>
        Welcome, <AccountCircle className={s.userAvatar} />
        <span className={s.userName}>{` ${userName} (${userEmail})`}</span>
      </p>
      <NavLink to="/" className={s.logout}>
        <ExitToAppIcon onClick={() => logOut()} />
      </NavLink>
    </div>
  );
};

UserMenu.propTypes = {
  userName: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  logOut: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userName: authSelectors.getUsername(state),
  userEmail: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = {
  logOut: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
