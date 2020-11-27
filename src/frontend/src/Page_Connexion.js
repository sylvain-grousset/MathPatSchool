import React, { Component } from "react";

export class Page_Connexion extends Component {

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
    window.location.replace("https://localhost:3000/login?utilisateur="+this.state.username+"&mdp="+this.state.password);
    event.preventDefault();
}
    
render() {
    return (
        <form onSubmit={this.handleSubmit} class='App-header'>
            <h1>Bienvenue sur notre page de connexion !</h1><br />
            <center><label>Nom d'utilisateur : </label><input type="text" name="username" value={this.state.username} onChange={this.handleChange} /></center><br />
            <center><label>Mot de passe : </label><input type="password" name="password" value={this.state.password} onChange={this.handleChange} /></center><br />
            <center><input type="submit" value="Valider"></input></center><br />
            <center><a href="">Mot de passe oubli&eacute; ?</a></center><br />
            <input type="button" value="Annuler"></input>
        </form>
    );

}

}

export default Page_Connexion;