import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HuNavbar } from './components/HuNavbar/HuNavbar';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'; 

import Home from './pages/Home';
/*import ClickTracker from './components/ClickTracker';*/

import './App.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        
        <HuNavbar />
        
        <Switch>
          
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path="/category/:catId">
            <ItemListContainer greeting={'Productos elegidos'} />
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

