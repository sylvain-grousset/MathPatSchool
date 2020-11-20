import React from 'react';
import './App.css';

import * as ReactBootStrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Groupe() {

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/gestionGroupe">
            <GestionGroupe />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function GestionGroupe() {
  return <h2>Groupe</h2>;
}


export default Groupe;