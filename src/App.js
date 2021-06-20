import React, { Component } from 'react';
import Repository from './repostiory';

class App extends Component {

  state = { 
    user:"",
    userName:null,
   };

  handleChange = (e) => {
    this.setState({user: e.currentTarget.value})
  }

  handleClick = () => {
    const userName = this.state.user==="" ? null : this.state.user
    this.setState({userName})
  }

  render(){
    const {user, userName} = this.state;
    return (
      <div>
        <h1>Welcome to Github</h1>
        <label>Username : </label>
        <input type="text" value={user} onChange={this.handleChange} />
        <button onClick = {this.handleClick}>Find Repo</button>
        {userName ? <Repository userName={userName} /> : <h1>Please Enter Username</h1>}
      </div>
    );
  };
}

export default App;
