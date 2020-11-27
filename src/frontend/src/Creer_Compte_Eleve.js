import React, { Component } from "react";

export class Creer_Compte_Eleve extends Component {

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
        
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} class='App-header'>
                <h1>Cr&eacute;ation d'un compte &eacute;l&egrave;ve</h1><br />
                <center><label>Nom d'utilisateur : </label><input type="text" name="username" value={this.state.username} onChange={this.handleChange} /></center><br />
                <center><label>Mot de passe : </label><input type="password" name="password" value={this.state.password} onChange={this.handleChange} /></center><br />
                <center><input type="submit" value="Valider"></input></center><br />
                <input type="button" value="Annuler"></input>
            </form>
        );

    }

}

export default Creer_Compte_Eleve;