import { connect } from 'react-redux';

import { operations, isloading } from 'redux/contacts';
import { authSelectors } from 'redux/auth';
import Contacts from './Contacts';

const mapStateToProps = state => ({
  loading: isloading(state),
  isAuthorization: authSelectors.getIsAuthorization(state),
});

const mapDispatchToProps = {
  getContacts: operations.getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
