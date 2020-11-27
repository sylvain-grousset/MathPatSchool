import React from 'react';
import ReactDOM from 'react-dom';
//import { with-Router } from 'react-Router';
import './App.css';
import Page_Connexion from './Page_Connexion.js';

class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Page_Connexion />
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;