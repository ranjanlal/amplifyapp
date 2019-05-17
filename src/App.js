import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './tic_tac_toe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Tic Tac Toe</h2>
        <Game />
      </header>
    </div>
  );
}

export default App;
