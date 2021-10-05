import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { Router, Link } from "@reach/router";
import Home from './components/Home';
import DisplayNumberForm from './components/DisplayNumberForm';
import DisplayWordForm from './components/DisplayWordForm';
import DisplayStyleForm from './components/DisplayStyleForm';
import DisplayWord from './components/DisplayWord';

function App() {

  const [ number, setNumber ] = useState();
  const [ stye, setStyle ] = useState();
   
  const handleWordSubmit = (e, word) => {
    e.preventDefault();
    setWord(word);
  };
  
  const handleNumberSubmit = (e, numberSubmit) => {
    e.preventDefault();
    setNumber(numberSubmit);
  };

  const handleStyleSubmit = (e, styleSubmit) => {
    e.preventDefault();
    const newStyle = {
      styleWord: styleSubmit.word,
      styleColorOne: styleSubmit.colorOne,
      sytleColorTow: styleSubmit.colorTwo,
    };
  };

  

  return (
    <div className="App">
      <ul>
        <li><Link to="/home">Home</Link></li>
      </ul>
      
      <Router>
        <Home path="/home" />
        {/* <DisplayWord path={`/${word}`} />
        <DisplayNumber path={`/${number}`} />
        <DisplayStyle path={`/${style}`} /> */}
      </Router>

      {/* <h1>Routing Practice</h1>
      <DisplayWordForm word={word}/>
      <DisplayNumberForm/>
      <DisplayStyleForm/> */}
    </div>
  );
}

export default App;
