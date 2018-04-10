import React from 'react';
import './styles.css';

import LandingPage from './landing.page';
import ProtectedPage from './protected.page';

function App() {
  return (
    <div className="app">
      <h1>React Route Protect</h1>
      <LandingPage />
      <ProtectedPage />
    </div>
  );
}

export default App;
