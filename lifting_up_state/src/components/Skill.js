import React from "react";

const Skill = (props) => {
    const { handleDeleteSkill, handleIncreaseSkillLevel, skillObj, index } = props;

    return (
    <div key={index}>
          <p>Skill: {skillObj.skill}</p>
          <p>Level: {skillObj.level}</p>
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
    );
};

export default Skill;