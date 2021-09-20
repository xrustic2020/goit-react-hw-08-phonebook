import { useState } from 'react';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';

import InputField from 'components/InputField';
import Section from 'components/Section';

import s from './Login.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const Login = ({ logInUser, isAuthorization }) => {
  const history = useHistory();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    if (!login) {
      toast.warn('Field "Login" is required! Enter your login, please')
      return
    }
    if (!password) {
      toast.warn('Field "Password" is required! Enter your password and checked login, please')
      return
    }
    const user = { email: login, password };
    logInUser(user);
  };

  const navigateToRegistration = () => history.push('/register');

  return (
    <>
      <Section title="Login">
        {isAuthorization && <Redirect to="/contacts" />}
        <form className={s.form} onSubmit={handleSubmit}>
          <InputField
            labelName="Login"
            type="text"
            name="login"
            value={login}
            handler={setLogin}
          />
          <InputField
            labelName="Password"
            type="password"
            name="password"
            value={password}
            handler={setPassword}
          />
          <div className={s.authButton}>
            <Button
              onClick={navigateToRegistration}
              type="button"
              variant="outlined"
              color="primary"
              size="small"
            >
              Sign up
            </Button>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="small"
              startIcon={<ExitToAppIcon />}
            >
              Enter to Account
            </Button>
          </div>

        </form>
      </Section>
      <ToastContainer />
    </>
  );
};

Login.propTypes = {
  logInUser: PropTypes.func.isRequired,
  isAuthorization: PropTypes.bool.isRequired,
};

export default Login;
