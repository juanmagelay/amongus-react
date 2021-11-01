import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HuNavbar from './components/HuNavbar/HuNavbar';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'; 
import Home from './pages/Home';
/*import ClickTracker from './components/ClickTracker';*/

import './App.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        
        <HuNavbar />
        
        <Switch>
          
          <Route path='/'>
            <Home />
          </Route>

          <Route exact path='/category'>
            <h1 className="text-center">Nuestras categorías están en construcción</h1>
          </Route>
          
          <Route exact path='/cart'>
            {/*<Cart />*/}
          </Route>
          
          <Route path="/item/:id" component={ItemDetailContainer} />
          
          {/*<ClickTracker />*/}
        
        </Switch>
      
      </BrowserRouter>
    </>
  );
};

