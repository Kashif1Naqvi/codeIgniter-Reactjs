import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const Login = Loadable({
  loader: () => import('./views/Pages/Login'),
  loading
});

const Register = Loadable({
  loader: () => import('./views/Pages/Register'),
  loading
});

class Admin extends Component {

  render() {
    return (
      <HashRouter>
          <Switch>
            <Route  path="/" name="Login Page" exact strict component={Login} />
            <Route  path="/register" name="Register Page" component={Register} />
            <Route  path="/404" name="Page 404" component={Page404} />
            <Route  path="/500" name="Page 500" component={Page500} />
            // <Route  path="/" name="Home" component={DefaultLayout} />
          </Switch>
      </HashRouter>
    );
  }
}

export default Admin;
