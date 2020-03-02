import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Route } from 'react-router-dom';

import LoginFormContainer from '../components/login_form_container';
import SignupFormContainer from '../components/signup_form_container';
import GreetingContainer from '../components/greeting_container';
import Splash from '../components/splash/splash';

const App = () => (
  <div id="app-div">
    <Route exact path="/" component={Splash} />
    <AuthRoute path="/login" component={LoginFormContainer} loggedIn={false} />
    <AuthRoute path="/signup" component={SignupFormContainer} loggedIn={false} />
  </div>
);

export default App;