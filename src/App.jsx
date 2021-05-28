import { Suspense } from 'react';
import Container from 'components/Container';
import Loader from 'components/Loader';
import { Switch, Route } from 'react-router-dom';
import routes from 'data/routes';

const App = () => {
  return (
    <Container>
      <Suspense fallback={<Loader />}>
        <Switch>
          {routes.map(({ path, exact, component: Component }) => (
            <Route key={path} path={path} exact={exact} component={Component} />
          ))}
          {/* <Route component={Loader} /> */}
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;
