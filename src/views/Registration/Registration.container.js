import { connect } from 'react-redux';

import { authOperations, authSelectors } from 'redux/auth';
import Registration from './Registration';

const mapStateToProps = state => ({
  isAuthorization: authSelectors.getIsAuthorization(state),
});

const mapDispatchToProps = {
  register: authOperations.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
