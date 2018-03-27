import React from 'react';
import Profile from 'containers/Profile';
import Home from 'containers/Home';
import Login from 'containers/Login';
import Todos from 'containers/Todos';

import store from './store';

import { Route, Redirect, } from 'react-router-dom';

const RouteWithSubRoutes = (routeProps) => {
  return (
    <Route
      exact
      path={routeProps.path}
      render={props => {
        const state = store.getState();
        if (routeProps.protected
          && state.user.loaded
          && !state.user.data) {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          );
        }

        return <routeProps.component {...props} routes={routeProps.routes} />
      }}
    />
  )
};


export default state => [
  {
    path: '/',
    component: Home,
    protected: false,
  },
  {
    path: '/login',
    component: Login,
    protected: false,
  },
  {
    path: '/profile',
    component: Profile,
    protected: true,
  },
  {
    path: '/todos',
    component: Todos,
    protected: true,
  },
].map((route, i) => <RouteWithSubRoutes key={i} state={state} {...route} />);
