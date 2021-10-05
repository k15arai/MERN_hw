// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [ word, setWord ] = useState("");
  // const [ dummy, setDummy ] = useState(false);
  const [ apiData, setApiData ] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
      .then((res) => {
        console.log(res.data.results);
        setApiData(res.data.results);
      })
        .catch((err) => console.log(err));
    console.log("inside use effect");
  }, []);
  console.log("render");

  return (
    <div className="App">
      {/* <h2>WORD: {word}</h2>
      <input type="text" onChange={(e) => setWord(e.target.value)} /> */}

      {/* {apiData.length > 0 ? <p>{apiData[0].name}</p> : <p>Loading...</p>} */}

      {apiData.length > 0 && apiData.map((element, index) => (
        <div key={index}>
          <p>Name: {element.name}</p>
          <p>Skin Color: {element.skin_color}</p>
          <p>Eye Color: {element.eye_color}</p>
          <hr />
        </div>
      ))}

    </div>
  );
}

export default App;

// npm i @reach/router --force