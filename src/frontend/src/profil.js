import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Calendrier from './Calendrier.js';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function CnxProfil() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/profil">
            <Profil />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Profil(){
    return(
     <Calendrier />
    )
}



export default CnxProfil;