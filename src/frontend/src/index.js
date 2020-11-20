import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Groupe from './gestionGroupe';
import NavBar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Switch } from "react-router";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Groupe />
  </React.StrictMode>,
  document.getElementById('root')
  
);


serviceWorker.unregister();