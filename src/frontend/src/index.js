import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page_Connexion from './Page_Connexion';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Groupe from "./gestionGroupe";


ReactDOM.render(
  <React.StrictMode>
    <Page_Connexion />
    <Groupe />
  </React.StrictMode>,
  document.getElementById('root')
);

