import React, { Component, Mixin } from 'react';
import logo from './logo.svg';
import './App.css';

import Leader from './models/Leader';
import leaderService from './services/leaderService';

class App extends React.Component<{}, { leader: Leader, isLoaded: boolean}>
{
  constructor(props: any)
  {
    super(props);
    this.state = {
      leader: new Leader(),
      isLoaded: false
    }
    this.chooseLeader = this.chooseLeader.bind(this);
  }

  componentDidMount(): void 
  {
    if(!this.state.isLoaded) {
      this.chooseLeader();
      this.setState({
        isLoaded: true
      });
    }
  }

  chooseLeader()
  {
    let leader = leaderService.getRandomLeader();
    this.setState({
      leader: leader
    });
  }

  getNextDecision()
  {
    console.log('I am still work in progress!');
  }

  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          { this.state.isLoaded ? this.state.leader.getName() : 'Loading...' }
          <button onClick={this.chooseLeader}>New Leader</button>
          <button onClick={this.getNextDecision}>Test</button>
        </header>
      </div>
    );
  }
}

export default App;
