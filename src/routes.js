import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Login from './login.js';
//import DashboardApp from './login.js'
import { useHistory } from 'react-router-dom'; 
import RouterComponent from './RouterComponent/RouterComponent';
import Upload from './components/upload.js'
const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/home"
      />
      <Login 
        path="/home"
      />
      <Upload 
        path="/upload"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;