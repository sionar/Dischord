import React from 'react';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import { Route } from 'react-router-dom';

import AuthPage from './components/auth_page/auth_page';
import SplashContainer from './components/splash/splash-container';
import LoadingModalContainer from './components/main/loading/loading_modal_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app-div">
        <Route exact path="/" component={SplashContainer} />
        <AuthRoute path="/register" component={AuthPage} redirectRoute={"/channels/@me"}/>
        <AuthRoute path="/login" component={AuthPage} redirectRoute={"/channels/@me"}/>
        <ProtectedRoute path="/channels/" component={LoadingModalContainer} redirectRoute={"/login"}/>
      </div>
    )
  }
}


export default App;