// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Pokemon from './components/Pokemon'

function App() {

  return (
    <div className="App">
      <button>Fetch Pokemon</button>
      <Pokemon/>
    </div>
  );
}

export default App;