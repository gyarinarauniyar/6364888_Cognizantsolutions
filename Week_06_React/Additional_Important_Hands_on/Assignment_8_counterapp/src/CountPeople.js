import React, { Component } from 'react';
import './App.css';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entryCount: 0,
      exitCount: 0
    };
  }

  updateEntry = () => {
    this.setState({ entryCount: this.state.entryCount + 1 });
  };

  updateExit = () => {
    this.setState({ exitCount: this.state.exitCount + 1 });
  };

  render() {
    return (
      <div className="people-counter">
        <div className="entry">
          <button className="greenButton" onClick={this.updateEntry}>
            Login
          </button>
          <span>{this.state.entryCount} People Entered!!!</span>
        </div>
        <div className="exit">
          <button className="greenButton" onClick={this.updateExit}>
            Exit
          </button>
          <span>{this.state.exitCount} People Left!!!</span>
        </div>
      </div>
    );
  }
}

export default CountPeople;
