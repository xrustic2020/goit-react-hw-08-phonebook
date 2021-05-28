import { createUseStyles } from 'react-jss';
import Section from 'components/Section';
import { NavLink } from 'react-router-dom';

const useStyles = createUseStyles({
  filling: {
    paddingBottom: 0,
    '& h2': {
      marginBottom: '-1px',
    },
    overflow: 'hidden',
  },
  container: {
    display: 'flex',
    width: '100%',
  },
  link: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#383838',
    width: '50%',
    padding: '20px 0',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: 'rgb(0, 140, 255)',
      color: 'white',
    },
  },
  line: {
    borderRight: '1px solid rgb(219, 219, 219)',
  },
});

const HomePage = () => {
  const classes = useStyles();
  return (
    <Section title="Welcome in Phonebook App" customClass={classes.filling}>
      <nav className={classes.container}>
        <NavLink
          to="/register"
          className={[classes.link, classes.line].join(' ')}
        >
          Sign Up
        </NavLink>
        <NavLink to="/login" className={classes.link}>
          Sign In
        </NavLink>
      </nav>
    </Section>
  );
};

export default HomePage;
