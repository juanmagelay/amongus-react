import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import { CartFuncion } from './context/CartContext'

import Cart from './components/Cart/Cart';
import { HuNavbar } from './components/HuNavbar/HuNavbar';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ClickTracker from './components/ClickTracker'; 

import './App.css';

function App() {
  return (
    <>
        <BrowserRouter>
          <CartFuncion>
            <HuNavbar />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path="/category/:catId">
                <ItemListContainer greeting={'Productos elegidos'} />
              </Route>
              <Route exact path='/cart'>
                <Cart />
              </Route>
              <Route path="/item/:id" component={ItemDetailContainer} />
              <Route exact path='*'>
                <div className="text-center mt-4">
                  <h1 >No se encuentra la página.</h1>
                  <ClickTracker />
                </div>
              </Route>      
            </Switch>
          </CartFuncion>
        </BrowserRouter>
    </>
  );
};

export default App;