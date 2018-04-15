import React from 'react';
import './styles.css';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './protected.route';
import LandingPage from './landing.page';
import ProtectedPage from './protected.page';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <ProtectedRoute exact path="/protected" component={ProtectedPage} />
        <Route path="*" component={() => "404"} />
      </Switch>
     
    </div>
  );
}

export default App;
