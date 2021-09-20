import { Suspense, useEffect } from 'react';
import Container from 'components/Container';
import Loader from 'components/Loader';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from 'data/routes';
import { connect } from 'react-redux';
import { authOperations } from 'redux/auth';
import NavBar from 'components/NavBar';

const App = ({ getUserData }) => {
  useEffect(() => {
    getUserData();
  }, []); // eslint-disable-line

  return (
    <Container>
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          {routes.map(({ path, exact, component: Component }) => (
            <Route key={path} path={path} exact={exact} component={Component} />
          ))}
          <Redirect to='/' />
        </Switch>
      </Suspense>
    </Container>
  );
};

const mapDispatchToProps = {
  getUserData: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
