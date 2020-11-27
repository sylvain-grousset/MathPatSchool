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

function NavBar() {
    return (
        <div className="NavBar">
        <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
  <ReactBootStrap.Navbar.Brand href="/Accueil">LOGO</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">

      <ReactBootStrap.Nav.Link href="/gestionGroupe">Groupes</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/Parcours">Parcours</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/Edt">Emploi du temps</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/Eleve">El&egrave;ve</ReactBootStrap.Nav.Link>
      
    </ReactBootStrap.Nav>

    <ReactBootStrap.Nav>
   
      <ReactBootStrap.NavDropdown title="#Nom d'utilisateur" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="/Profil">Profil</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="/Deconnexion">D&eacute;connexion</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    
  </ReactBootStrap.Navbar.Collapse>

</ReactBootStrap.Navbar>
</div>)
}

function CnxGroupe() {
  return <h2>gestionGroupe</h2>;
}

export default NavBar;