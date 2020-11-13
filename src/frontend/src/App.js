import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";


function App() {
    return (
        <div className="App">
        <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#Accueil">LOGO</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="#MatPatSchool">MatPatSchool</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#Groupes">Groupes</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#Parcours">Parcours</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#Edt">Emploi du temps</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#Eleve">El�ve</ReactBootStrap.Nav.Link>
      <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>

    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="#username">#Nom d'utilisateur</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
    
  </ReactBootStrap.Navbar.Collapse>

</ReactBootStrap.Navbar>
</div>)
}

export default App;