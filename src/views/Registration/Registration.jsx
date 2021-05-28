import { useState } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

import HowToRegIcon from '@material-ui/icons/HowToReg';
import Button from '@material-ui/core/Button';

import Section from 'components/Section';
import InputField from 'components/InputField';

import s from './Registration.module.css';

const Registration = ({ register, isAuthorization }) => {
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

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="small"
              startIcon={<HowToRegIcon />}
            >
              Create Account
            </Button>
          </form>
        </Section>
      )}
    </>
  );
};

Registration.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthorization: PropTypes.bool.isRequired,
};

export default Registration;
