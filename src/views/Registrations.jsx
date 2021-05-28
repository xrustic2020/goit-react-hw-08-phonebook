import { createUseStyles } from 'react-jss';
import { useState } from 'react';

import HowToRegIcon from '@material-ui/icons/HowToReg';
import Button from '@material-ui/core/Button';

import Section from 'components/Section';
import InputField from 'components/InputField';

const useStyles = createUseStyles({
  form: {
    width: '90%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(`регистрируем пользователя ${name}`);
    console.log(`Ваш email ${email}, пароль: ${password}`);
  };

  return (
    <Section title="Registration">
      <form className={classes.form} onSubmit={handleSubmit}>
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
  );
};

export default Registration;
