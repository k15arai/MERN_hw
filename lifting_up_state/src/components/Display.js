import React from "react";
import Skill from "./Skill";

const Display = (props) => {
    const { skillArr, handleDeleteSkill, handleIncreaseSkillLevel } = props;
    
    return (
        <div>
            {skillArr.map((skillObj, index) => (
                <div key={index}>
                <Skill 
                    handleDeleteSkill={handleDeleteSkill}
                    handleIncreaseSkillLevel={handleIncreaseSkillLevel}
                    skillObj={skillObj}
                    index={index}
                />
                </div>
            ))}
        </div>
    );
}

export default Display;