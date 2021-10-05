import './App.css';
// import Restaurant from './components/Restaurant';
import Beatle from './components/Beatle';
import React, { useState } from 'react';

function App() {
  // const restaurant = {
  //   name: "Tony's",
  //   type: "Pizza",
  //   address: "123 Main Street"
  // };

  const theBeatles = [
    { 
      name: "John Lennon",
      instrument: "guitar",
      likes: 4,
      writesMusic: true,
    },
    { 
      name: "Paul McCartney",
      instrument: "bass",
      likes: 8,
      writesMusic: true,
    },
    { 
      name: "George Harrison",
      instrument: "guitar",
      likes: 4,
      writesMusic: true,
    },
    { 
      name: "Ringo Starr",
      instrument: "drums",
      likes: 2,
      writesMusic: false,
    },
  ];

  const [ word, setWord ] = useState("peanutbutter");
  
  const handleChangeWord = () => {
    console.log("handleChangeWord clicked");
    // {word === "peanutbutter" ? setWord("jelly") : setWord("peanutbutter")}; needs to be inside of JSX perhaps
    if (word === "peanutbutter") {
      setWord("jelly");
    } else {
      setWord("peanutbutter");
    }
  };
  
  console.log("APP COMPONENT RENDER");
  return (
    <div className="App">
      {/* <Restaurant 
        name={restaurant.name}
        type={restaurant.type}
        address={restaurant.address} 
      /> */}

      <h3>Word: {word}</h3>
      <button onClick={() => handleChangeWord()}>Change Word</button>
      
      {/* would need to repeat for all members - also not dynamic! */}
      {/* <Beatle 
        name={theBeatles[0].name}
        instrument={theBeatles[0].instrument}
        likes={theBeatles[0].likes}
        writesMusic={theBeatles[0].writesMusic}
      /> */}
      
      {theBeatles.map((element) => (
        <Beatle 
          // any time you use a map, you should use an index
          key = {element.index} 
          name={element.name}
          instrument={element.instrument}
          likes={element.likes}
          writesMusic={element.writesMusic} />
      ))}

      <button onClick={() => console.log("button was clicked")}>
        CLICK ME
      </button>

    
    </div>
  );
}

export default App;
