// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [ skill, setSkill ] = useState("");
  const [ skillArr, setSkillArr ] = useState([]);
  
  // Create Skill
  const handleSubmitSkill = (e, skill) => {
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
      <h1>You've got mad skills - Form Component</h1>
      <Form 
        handleSubmitSkill={handleSubmitSkill}
        skill={skill}
        setSkill={setSkill}
      />

      {/* Read Data */}
      <h1>Display Skill Component</h1>
      <Display 
        skillArr={skillArr}
        handleDeleteSkill={handleDeleteSkill}
        handleIncreaseSkillLevel={handleIncreaseSkillLevel}
      />
    </div>
  );
};

export default App;