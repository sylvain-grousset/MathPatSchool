import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';

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
  <div className="page">
    <h2 className="titre">Groupes</h2>
    <form>
    <table className="groupesTableaux">
        <thead>Mes groupes</thead>
        
            <label className="groupes"><tr><input type="checkbox" id="groupe1" value="1" className="groupes"/>Groupe terminal SI1</tr></label>
            <tr className="groupes"><input type="checkbox" id="groupe2" value="2" className="groupes"/><label for="groupe2">Groupe terminal SI2</label></tr>
            <tr className="groupes"><input type="checkbox" id="groupe3" value="3" className="groupes"/><label for="groupe3">Groupe premiere</label></tr>
            <tr className="groupes"><input type="checkbox" id="groupe4" value="4" className="groupes"/><label for="groupe4">Groupe premiere</label></tr>
            
    </table>
        <input type="button" value="Supprimer groupe" id="supprimer"></input>
    <input type="button" id="myBtn" value="Cr&eacute;er groupe"></input>
    </form>
    <table className="groupesTableaux">
        <thead>Les &eacute;l&egrave;ves</thead>
            <tr>Martin WATKINS</tr>
            <tr>Max WACQUIER</tr>
    </table>



  </div>)
}






export default CnxGroupe;