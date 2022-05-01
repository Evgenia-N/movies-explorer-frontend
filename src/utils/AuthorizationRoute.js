import React from "react";
import { Route, Redirect } from "react-router-dom";

export const AuthorizationRoute = ({
  component: Component,
  loggedIn,
  ...props
}) => {
  return (
    <Route>
      {() => (loggedIn ? <Redirect to="/movies" /> : <Component {...props} />)}
    </Route>
  );
};
