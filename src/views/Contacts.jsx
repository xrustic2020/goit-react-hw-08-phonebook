import { useEffect } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import ContactForm from 'components/Contacts/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/Contacts/ContactList';
import Container from 'components/Container';
import Section from 'components/Section';
import Loader from 'components/Loader';

import { operations, isloading } from 'redux/contacts';

const Contacts = ({ loading, getContacts }) => {
  useEffect(() => {
    getContacts();
  }, []); // eslint-disable-line

  return (
    <Container>
      {loading && <Loader />}
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <div>
          <Filter />
          <ContactList />
        </div>
      </Section>
      <ToastContainer />
    </Container>
  );
};

const mapStateToProps = state => ({
  loading: isloading(state),
});

const mapDispatchToProps = dispatch => {
  return { getContacts: () => dispatch(operations.getContacts()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
