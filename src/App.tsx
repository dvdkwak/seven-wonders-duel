import React from 'react';
import './App.css';

import LeaderCard from './components/leaderCard';
import DecisionCard from './components/decisionCard';

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
      this.getNextDecision();
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
          <LeaderCard
            leader={this.state.leader} />
          <DecisionCard
            decision={this.state.decision}
            />
          <button onClick={this.getNextDecision}>Draw Next decision</button>
        </header>
      </div>
    );
  }
}

export default App;
