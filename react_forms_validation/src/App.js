import React, { useState } from "react";
import './App.css';

function App() {
  // TODO getter / setter
  const [ restaurantName, setRestaurantName ] = useState(""); // getter and setter
  const [ cuisine, setCuisine ] = useState("");
  const [ dummyBool, setDummyBool ] = useState(false);
  const [ restaurantNameError, setRestaurantNameError ] = useState("Restaurant name must be at least 4 characters.");
  console.log("rerenders");
  // const isDummyTrue = () => {
  //   if (dummyBool) { // checking if true
  //     return <h2>Dummy boolean is true</h2>;
  //   } else {
  //     return <h2>Dummy boolean is false</h2>;
  //   }
  // };
  const handleNameInputChange = (e) => {
    setRestaurantName(e.target.value);
    // best to use e.target.value versus the state variable
    if (e.target.value.length < 4) {
      setRestaurantNameError("[STATE] Restaurant name needs to be at least 4 characters.");
      console.log("less than 4");
    } else {
      setRestaurantNameError("");
      console.log("greater than 4");
    }
    console.log("restaurant name: ", restaurantName);
  }
  return (
    <div className="App">
      {/* <h2>{restaurantName}</h2>
      {/* onClick is a synthetic event */}
      {/* <button onClick={ () => setRestaurantName("Hello")}>Change Restaurant Name</button>  */}
      {/* ***** FORM ***** */}
      
      {/* Conditional Statements */}
      {/* {dummyBool === true ? <h2>Dummy boolean is true</h2> : <h2>Dummy boolean is false</h2>} */}
      {/* <button onClick={ () => setDummyBool(!dummyBool)}>change dummy boolean</button> */}
      
      {/* {isDummyTrue()}
      <button onClick={(e) => setDummyBool(!dummyBool)}>Turn dummy bool opposite</button> */}
      {console.log("INSIDE JSX")}
      {dummyBool && <h3>Dummy boolean is true</h3>}
      <button onClick={(e) => setDummyBool(!dummyBool)}>Turn dummy bool opposite</button>
      
      <form>
        <div>
          <h1>Add Restaurant</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input 
              type="text"
              name="name"
              id="name"
              onChange={(e) => handleNameInputChange(e)}
              // onChange={ (e) => setRestaurantName(e.target.value)}
              // onChange={() => console.log("name changed")}
              value={restaurantName} 
            />
          </div>
          {restaurantNameError && <p>{restaurantNameError}</p>}
          {/* {restaurantName.length < 4 ? (
            <p>Name must be at least 4 characters</p>) 
            : null
          } */}
          <div>
            <label htmlFor="cuisine">Cuisine:</label>
            <input 
              type="text" 
              name="cuisine" 
              id="cuisine" 
              onChange={ (e) => setCuisine(e.target.value)} 
              value={cuisine} 
            />
          </div>
          {cuisine.length < 3 && <p>[NON-STATE] Cuisine must be at least 3 characters</p>} 
        </div>
      </form>
      <div>
        <h2>Restaurant Info: </h2>
        <h2>Name: {restaurantName}</h2>
        <h2>Cuisine: {cuisine}</h2>
      </div>
    </div>
  );
}

export default App;
