import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/home/home'
import PlayHardMafia from './pages/playhardmafia/playhardmafia';
import Shop from './pages/shop/shop';
import Contact from './pages/contact/contact';
import Journal from './pages/journal/journal';
import Lookbook from './pages/lookbook/lookbook';
import FriendsAndFamily from './pages/friendsandfamily/friendsandfamily';
import Archives from './pages/archives/archives'

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/playhardmafia">
            <PlayHardMafia />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/lookbook">
            <Lookbook />
          </Route>
          <Route path="/journal">
            <Journal />
          </Route>
          <Route path="/archives">
            <Archives />
          </Route>
          <Route path="/f&f">
            <FriendsAndFamily />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
