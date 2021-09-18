import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Error from './components/Error';
import SignUp from './components/Auth/SignUp';
import Auth from './components/Auth/Auth';
import App from './app';
import './index.css';

ReactDOM.render(
  <>
    <BrowserRouter>
    <Switch>
        <Route exact path='/login' component={ Auth } />
        <Route exact path='/signup' component={ SignUp } />
        <Route exact path='/error' component={ Error }  />
        <Route exact path='/' component={ App } />
        <Route component={ Error } />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);