import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../auth/useAuth";

//const user = null;
//const user = {id:1, username:'cristian22'}

export default function PublicRoute({ component: Component, ...rest }) {
  const auth = useAuth();

  return (
    <Route {...rest}>
      {!auth.isLogged() ? (
        <Component />
      ) : (
        <Redirect to= "/dashboard" />
      )}
    </Route>
  );
}
