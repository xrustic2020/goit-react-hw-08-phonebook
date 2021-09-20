const getIsAuthorization = state => Boolean(state.auth.token);

const getUsername = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

const getIsError = state => state.auth.error;

const selectors = {
  getIsAuthorization,
  getUsername,
  getUserEmail,
  getIsError
};

export default selectors;
