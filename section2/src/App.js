import React from 'react';
import './App.css';
import StateInAction from './StateInAction';
import StateAndEvent from './StateAndEvent';
import StatePractice from './StatePractice';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        STRING
        <StateInAction/>
        <StateAndEvent/>
        <StatePractice/>
      </header>
    </div>
  );
}

export default App;
