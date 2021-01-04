import React from 'react';
import {Lending} from './pages/lending';
import {AuthPage} from './pages/auth';
import {Account} from './pages/account';
import {Register} from './pages/register';
import  { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export const App = ({go}) => {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Lending}/>
          <Route exact path="/login" component={AuthPage}/>
          <Route exact path="/account" component={Account}/>
          <Route exact path="/register" component={Register}/>
      </Switch>
    </Router>
  );
}


