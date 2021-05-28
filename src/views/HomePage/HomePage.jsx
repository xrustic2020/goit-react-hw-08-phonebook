import { NavLink, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Section from 'components/Section';
import s from './HomePage.module.css';

const HomePage = ({ isAuthorization }) => {
  return (
    <>
      {isAuthorization ? (
        <Redirect to="/contacts" />
      ) : (
        <Section title="Welcome in Phonebook App" customClass={s.filling}>
          <nav className={s.container}>
            <NavLink to="/register" className={[s.link, s.line].join(' ')}>
              Sign Up
            </NavLink>
            <NavLink to="/login" className={s.link}>
              Sign In
            </NavLink>
          </nav>
        </Section>
      )}
    </>
  );
};

HomePage.propTypes = { isAuthorization: PropTypes.bool.isRequired };

export default HomePage;
