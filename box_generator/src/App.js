// import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Form from "./components/Form";
import Display from "./components/Display";

function App() {

  // const [ boxColor, setBoxColor ] = useState(""); in Form.js
  const [ boxColorArr, setBoxColorArr ] = useState([]);
  
  const handleColorSubmit = (e, boxColor) => {
    e.preventDefault();
    setBoxColorArr([boxColor, ...boxColorArr]);
  };

  return (
    <div className="App">
      {/* <form onSubmit={(e) => handleColorSubmit(e)}>
        <input 
          type="text" 
          onChange={(e) => setBoxColor(e.target.value)}
          value={boxColor}
        />
        <button type="submit">
          Add
        </button>
      </form> */}
      <Form 
        handleColorSubmit={handleColorSubmit}
      />

      <h1>BOXES</h1>
      {/* {boxColorArr.map((color, index) => (
        <div
          style={{
            display: "inline-block",
            marginLeft: "15px",
            border: "2px solid black",
            backgroundColor: color,
            height: "250px",
            width: "250px",
          }}
          key={index}
        >
        </div>
      ))} */}
    <Display 
      boxColorArr = {boxColorArr} 
    />
    </div>
  );
}

export default App;
