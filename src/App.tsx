import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './pages/cart';
import Home from './pages/home';
import Header from './components/Header/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
