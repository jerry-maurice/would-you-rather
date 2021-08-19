import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import LoadingBar from 'react-redux-loading-bar'


const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component)}
    {...args}
  />
);

export default ProtectedRoute;