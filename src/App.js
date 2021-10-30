import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import ClickTracker from './components/ClickTracker';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/cart'>
            {/*<Cart />*/}
          </Route>
          <Route path='/'>
            <Home />
          </Route>
          {/*<ClickTracker />*/}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

