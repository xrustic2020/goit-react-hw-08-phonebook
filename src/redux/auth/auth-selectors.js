const getIsAuthorization = state => Boolean(state.auth.token);

const getUsername = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

const selectors = {
  getIsAuthorization,
  getUsername,
  getUserEmail,
};

export default selectors;
