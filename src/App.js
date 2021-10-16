import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import ClickTracker from './components/ClickTracker';

import './App.css';

function App() {
  return (
    <>
      <Home />
      <ClickTracker />
    </>
  );
};

export default App;

