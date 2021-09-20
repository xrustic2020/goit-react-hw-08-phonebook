import { useState } from 'react';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import HowToRegIcon from '@material-ui/icons/HowToReg';
import Button from '@material-ui/core/Button';

import Section from 'components/Section';
import InputField from 'components/InputField';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import s from './Registration.module.css';

const Registration = ({ register, isAuthorization }) => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetFields = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const user = { name, email, password };
    register(user);
    resetFields();
  };

  const navigateToLogin = () => history.push('/login');

  return (
    <>
      {isAuthorization ? (
        <Redirect to="/contacts" />
      ) : (
        <Section title="Registration">
          <form className={s.form} onSubmit={handleSubmit}>
            <InputField
              labelName="Name"
              type="text"
              name="name"
              value={name}
              handler={setName}
            />

            <InputField
              labelName="Email"
              type="text"
              name="email"
              value={email}
              handler={setEmail}
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
                onClick={navigateToLogin}
                type="button"
                variant="outlined"
                color="primary"
                size="small"
              >
                Sign in
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="small"
                startIcon={<HowToRegIcon />}
              >
                Create Account
              </Button>
            </div>

          </form>
        </Section>
      )}
      <ToastContainer />
    </>
  );
};

Registration.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthorization: PropTypes.bool.isRequired,
};

export default Registration;
