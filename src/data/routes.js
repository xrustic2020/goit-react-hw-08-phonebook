import { lazy } from 'react';

const HomePage = lazy(() =>
  import('views/HomePage' /* webpackChunkName: "HomePage" */),
);
const Registrations = lazy(() =>
  import('views/Registrations' /* webpackChunkName: "Registrations" */),
);
const Login = lazy(() => import('views/Login' /* webpackChunkName: "Login" */));

const Contacts = lazy(() =>
  import('views/Contacts' /* webpackChunkName: "Contacts" */),
);

const routes = [
  {
    path: '/',
    label: 'Home Page',
    component: HomePage,
    exact: true,
  },
  {
    path: '/register',
    label: 'Registration',
    component: Registrations,
    exact: true,
  },
  {
    path: '/login',
    label: 'Login',
    component: Login,
    exact: false,
  },
  {
    path: '/contacts',
    label: 'Contacts',
    component: Contacts,
    exact: false,
  },
];

export default routes;
