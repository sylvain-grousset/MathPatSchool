import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Page_Connexion from './Page_Connexion.js';
import Calendrier from './Calendrier.js';
import 'react-calendar/dist/Calendar.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Calendrier />
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;