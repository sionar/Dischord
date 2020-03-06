import React from 'react';
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.id) };
};

const Auth = ({ component: Component, path, loggedIn, exact, redirectRoute }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to={redirectRoute} />
    }
  />
);

const Protected = ({ component: Component, path, loggedIn, exact, redirectRoute }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Redirect to={redirectRoute} /> : <Component {...props} />
    }
  />
);

export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Auth)
);

export const ProtectedRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Protected)
);