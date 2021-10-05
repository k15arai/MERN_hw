// import logo from './logo.svg';
import './App.css';
import { Link, Router } from "@reach/router";
import React, { useState } from "react";
import Home from "./components/Home";
import DisplayInput from './components/DisplayInput';
import DisplayInputForm from './components/DisplayInputForm';
import DisplayStyle from './components/DisplayStyle';
import DisplayStyleForm from './components/DisplayStyleForm';

function App() {

  return (
    <div className="App">
      <h1>Routing Practice</h1>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/">Start Over</Link></li>
      </ul>
      <DisplayInputForm />
      <DisplayStyleForm />
      
      <Router>
        <Home path="/home" />
        <DisplayInput path="/:input" />
        <DisplayStyle path="/:wordInput/:textColor/:highlightColor" />
      </Router>

    </div>
  );
}

export default App;
