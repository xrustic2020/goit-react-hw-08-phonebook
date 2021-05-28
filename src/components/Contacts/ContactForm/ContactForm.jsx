import { useState } from 'react';
import PropTypes from 'prop-types';

import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Button from '@material-ui/core/Button';

import s from './ContactForm.module.css';
import checkingContact from './checkingContact';

import InputField from 'components/InputField';

const ContactForm = ({ onAddedContact, setFilter }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    const isCheckedContact = checkingContact(name, number, setFilter);
    setName('');
    setNumber('');

    if (isCheckedContact) onAddedContact(isCheckedContact);
  };

  return (
    <form onSubmit={evt => handleSubmit(evt)} className={s.form}>
      <div className={s.overlay}>
        <InputField
          labelName="Name"
          type="text"
          name="name"
          value={name}
          handler={setName}
        />
        <InputField
          labelName="Number"
          type="number"
          name="number"
          value={number}
          handler={setNumber}
        />
      </div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="small"
        startIcon={<AddOutlinedIcon />}
      >
        Add contact
      </Button>
    </form>
  );
};

ContactForm.propTypes = {
  onAddedContact: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default ContactForm;
