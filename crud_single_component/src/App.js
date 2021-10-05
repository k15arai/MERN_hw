// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const [ skill, setSkill ] = useState("");
  const [ skillArr, setSkillArr ] = useState([]);
  
  // Create Skill
  const handleSubmitSkill = (e) => {
    e.preventDefault();
    const newSkill = {
      skill: skill,
      level: 1,
    };
    setSkillArr([newSkill, ...skillArr]); // adding the newSkill and then adding in the ...skillArr
    setSkill(""); // this empties the input field when value={skill}
  };

  // Updating - skill level
  const handleIncreaseSkillLevel = (index) => {
    let skillToUpdate = { ...skillArr[index] };  // by using ...skillArr, we are looking at a shallow copy so that we don't directly affect the data
    skillToUpdate.level++;

      /*
  var skillArr = [
    {skill: "blah", level 1},
    {skill: "blah", level 1},
    {skill: "blah", level 1},
    {skill: "blah", level 1},
    {skill: "blah", level 1},
    {skill: "blah", level 1},
  ]; 
  */

    setSkillArr(
      [...skillArr.slice(0, index), skillToUpdate].concat(
        skillArr.slice(index + 1)
      )
    );
  };

  // Delete Data
  const handleDeleteSkill = (index) => {
    const filteredArr = skillArr.filter((element, idx) => idx !== index ); // not shallow copy since you need to delete
    setSkillArr(filteredArr);
  };

  return (
    <div className="App">
      {/* Create Data */}
      <h1>You've got mad skills</h1>
      <form onSubmit={(e) => handleSubmitSkill(e)}>
        <h3>Add a skill</h3>
        <input 
          type="text" 
          onChange={(e) => setSkill(e.target.value)} 
          value={skill}
        />
        <button type="submit">Add Skill</button>
      </form>

      {/* Read Data */}
      <h2>All Skills</h2>
      {skillArr.map((element, index) => (
        <div key={index}>
          <p>Skill: {element.skill}</p>
          <p>Level: {element.level}</p>
          {/* look by the index - feed the handleIncreaseSkillLevel function with index*/}
          <button 
            style={{ backgroundColor: "red", color: "white"}} 
            onClick={() => handleDeleteSkill(index)}
          >
            Remove
          </button>
          <button onClick={() => handleIncreaseSkillLevel(index)}>Level Up</button>
          <hr></hr>
        </div>
      ))}
    </div>
  );
};

export default App;
