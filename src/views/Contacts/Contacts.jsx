import { useEffect } from 'react';
import { Redirect } from 'react-router';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';

import ContactForm from 'components/Contacts/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/Contacts/ContactList';
import Container from 'components/Container';
import Section from 'components/Section';
import Loader from 'components/Loader';

const Contacts = ({ loading, getContacts, isAuthorization }) => {
  useEffect(() => {
    if (isAuthorization) getContacts();
  }, []); // eslint-disable-line

  return (
    <Container>
      {loading && <Loader />}
      {isAuthorization ? (
        <>
          <Section title="Added Form">
            <ContactForm />
          </Section>

          <Section title="Contacts">
            <div>
              <Filter />
              <ContactList />
            </div>
          </Section>
        </>
      ) : (
        <Redirect to="/" />
      )}

      <ToastContainer />
    </Container>
  );
};

Contacts.propTypes = {
  loading: PropTypes.bool.isRequired,
  getContacts: PropTypes.func.isRequired,
  isAuthorization: PropTypes.bool.isRequired,
};

export default Contacts;
