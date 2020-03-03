import React from 'react';
import { AuthRoute } from './util/route_util';
import { Route } from 'react-router-dom';

import AuthPage from './components/auth_page/auth_page';
import Splash from './components/splash/splash';

const App = () => (
  <div id="app-div">
    <Route exact path="/" component={Splash} />
    <Route path="/register" component={AuthPage}/>
    <Route path="/login" component={AuthPage}/>
  </div>
);

export default App;