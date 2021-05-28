import { useState } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';

import InputField from 'components/InputField';
import Section from 'components/Section';

import s from './Login.module.css';

const Login = ({ logInUser, isAuthorization }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    const user = { email: login, password };
    logInUser(user);
  };

  return (
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="small"
          startIcon={<ExitToAppIcon />}
        >
          Enter to Account
        </Button>
      </form>
    </Section>
  );
};

Login.propTypes = {
  logInUser: PropTypes.func.isRequired,
  isAuthorization: PropTypes.bool.isRequired,
};

export default Login;
