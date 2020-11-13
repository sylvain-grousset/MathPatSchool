import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            username: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        alert("Le nom d'utilisateur a été soumis : " + this.state.username + " ainsi que le mot de passe : " + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} class='App-header'>
                <h1>Bienvenue sur notre page de connexion !</h1><br/>
                <center><label>Nom d'utilisateur : </label><input type="text" name="username" value={this.state.username} onChange={this.handleChange}/></center><br/>
                <center><label>Mot de passe : </label><input type="password" name="password" value={this.state.password} onChange={this.handleChange}/></center><br/>
                <center><input type="submit" value="Envoyer"></input></center><br/>
                <center><a href="https://www.w3schools.com/">Mot de passe oublié ?</a></center><br/>
                <center><a href="https://www.w3schools.com/">S'enregistrer ?</a></center><br/>
                <input type="button" value="Annuler"></input>
            </form>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;