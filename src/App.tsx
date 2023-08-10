import React from 'react';
import './App.css';

import Leader from './models/Leader';
import leaderService from './services/leaderService';
import Decision from './models/Decision';
import decisionDeck from './objects/decisionDeck';

class App extends React.Component<{}, { leader: Leader, decision: Decision, isLoaded: boolean}>
{
  decisionDeck: decisionDeck = new decisionDeck();

  constructor(props: any)
  {
    super(props);
    this.state = {
      leader: new Leader(),
      decision: new Decision(),
      isLoaded: false
    }
    this.chooseLeader = this.chooseLeader.bind(this);
    this.getNextDecision = this.getNextDecision.bind(this);
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
    this.setState({
      decision: this.decisionDeck.draw()
    });
  }

  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          { this.state.isLoaded ? this.state.leader.getName() : 'Loading...' }
          <button onClick={this.chooseLeader}>New Leader</button>
          <button onClick={this.getNextDecision}>Test</button>
          { this.state.isLoaded ? this.state.decision.getChoice() : 'Loading...' }
        </header>
      </div>
    );
  }
}

export default App;
