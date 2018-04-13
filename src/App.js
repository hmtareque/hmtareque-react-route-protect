import React from 'react';
import './styles.css';
import { Route } from 'react-router-dom';
import ProtectedRoute from './protected.route';
import LandingPage from './landing.page';
import ProtectedPage from './protected.page';

function App() {
  return (
    <div className="app">
      <h1>React Route Protect</h1>
      <Route exact path="/" component={LandingPage} />
      <ProtectedRoute exact path="/protected" component={ProtectedPage} />
    </div>
  );
}

export default App;
