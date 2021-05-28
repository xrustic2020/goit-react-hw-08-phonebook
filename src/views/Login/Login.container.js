import { connect } from 'react-redux';

import { authOperations, authSelectors } from 'redux/auth';
import Login from './Login';

const mapStateToProps = state => ({
  isAuthorization: authSelectors.getIsAuthorization(state),
});

const mapDispatchToProps = {
  logInUser: authOperations.logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
