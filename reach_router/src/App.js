// import logo from './logo.svg';
import './App.css';
import { Link, Router, navigate } from "@reach/router";
import React, { useState } from "react";
import Home from './components/Home';
import Contact from './components/Contact';
import DisplayWord from './components/DisplayWord';

function App() {
  const [ firstWord, setFirstWord ] = useState("enter first word");
  const [ secondWord, setSecondWord ] = useState("enter second word");

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <form onSubmit={(e) => navigate(`/display/${firstWord}/${secondWord}`)} >
        <input 
          type="text" 
          onChange={(e)=>setFirstWord(e.target.value)}
          value={firstWord}
        />
        <input 
          type="text" 
          onChange={(e)=>setSecondWord(e.target.value)}
          value={secondWord}
        />
        <button style={{ backgroundColor: "blue", color: "white" }} type="submit">Submit</button>
      </form>

      <Router>
        <Home path="/home" />
        <Contact path="/contact" />
        <DisplayWord path="/display/:firstWord/:secondWord" />
      </Router>
    </div>
  );
}

export default App;

