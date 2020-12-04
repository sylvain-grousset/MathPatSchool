
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    username: '',
    password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    alert('Bonjour ' + this.state.username + this.state.password);
    event.preventDefault();
  }

  render() {
    return (

      <form class='App-header'>
      <h1>Bienvenue</h1>
        <label>
            Login : <input name="username" type="text" value={this.state.username} onChange={this.handleChange} />
        </label>
        <label>
            Mot de passe : <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Valider" />
       
      </form>

    );
  }
}