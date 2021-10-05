// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
// states
const [ toDo, setToDo ] = useState("");
const [ toDoArr, setToDoArr ] = useState([]);

// Create
const handleSubmitToDo = (e) => {
  e.preventDefault();
  const newToDo = {
    toDo: toDo,
    complete: false,
  };
  setToDoArr([newToDo, ...toDoArr ]);
  console.log(toDoArr);
  setToDo("");
};

// Read data below form

// Update if checkbox is checked
const handleCheckbox = (index) => {
  let toDoCompletionUpdate = { ...toDoArr[index] };
  console.log(toDoCompletionUpdate);
  toDoCompletionUpdate.complete = !toDoCompletionUpdate.complete;

  setToDoArr(
    [...toDoArr.slice(0,index), toDoCompletionUpdate].concat(toDoArr.slice(index+1)
    )
  );
};

// Delete
const handleDeleteToDo = (index) => {
  const filteredArr = toDoArr.filter((element, idx) => idx !== index);
  setToDoArr(filteredArr);
};

  return (
    <div className="App">
      <h1>Add Item To To Do List</h1>
      <form onSubmit={(e) => handleSubmitToDo(e)}>
        <input
          type="text"
          onChange={(e) => setToDo(e.target.value)}
          value={toDo}
        />
        <button style={{ backgroundColor: "blue", color: "white" }} type="submit">Add</button>
      </form>
      {/* Read Data */}
      <h2>My To Do List</h2>
      {toDoArr.map((element, index) => (
        <div key={index}>
          <label style={{ textDecorationLine: element.complete === true ? 'line-through' : 'none' }} htmlFor={"element-"+index.toString()} >{element.toDo}</label>
          <input 
            type="checkbox"
            name={"element-"+index.toString()} 
            onChange={() => handleCheckbox(index)} 
            checked={element.complete === true ? "checked" : ""}
          />
          <button
            name={"element-"+index.toString()}
            style={{ backgroundColor: "black", color: "white" }}
            onClick={() => handleDeleteToDo(index)}
          >
            Delete
          </button>
          <hr></hr>
        </div>
        ))
      }
    </div>
  );
}

export default App;
