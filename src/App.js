import React, { Component } from 'react';
import WelcomeUser from './welcomeUser';
import { Route, Switch, Link } from 'react-router-dom';
import Welcome from './welcome';

class App extends Component {
  state = {}
  render() {
    return (
      <>
      {/* <h1 className = 'App-header'>Github</h1> */}
      {/* <Link to="/welcome">welcome</Link> */}
      <main>
        <Switch>        
          <Route path="/welcome" component={Welcome} />
          <Route path="/" component={WelcomeUser} exact />
          {/* <Redirect to="/user" exact from="/" /> */}
        </Switch>
      </main>
      </>
    );
  };
}

export default App;
