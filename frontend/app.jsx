import React from 'react';
import { AuthRoute } from './util/route_util';
import { Route } from 'react-router-dom';

import Register from './components/register/register';
import Splash from './components/splash/splash';

const App = () => (
  <div id="app-div">
    <Route exact path="/" component={Splash} />
    <AuthRoute path="/register" component={Register}/>
  </div>
);

export default App;