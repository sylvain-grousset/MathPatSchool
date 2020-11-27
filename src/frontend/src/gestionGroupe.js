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

function CnxGroupe() {

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
  return(

  <div class="page">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <h2 class="titre">Groupe</h2>
    <table class="groupesTableaux">
        <thead>Mes groupes</thead>
            <tr><input type="button" class="selectionButton" id="test" value="Groupe terminal SI1" onclick="" ></input></tr>
            <tr><input type="button" class="selectionButton" value="Groupe terminal 3"></input></tr>
            <tr>Groupe terminal 3</tr>
    </table>
    <table class="groupesTableaux">
        <thead>Les &eacute;l&egrave;ves</thead>
            <tr>Martin WATKINS</tr>
            <tr>Max WACQUIER</tr>
    </table>
    <input type="button" value="Supprimer"></input>
    <input type="button" value="Cr&eacute;er"></input>
  </div>)
}



export default CnxGroupe;