import React, { useState } from "react";

const Form = (props) => {
    const [ skill, setSkill ] = useState("");
    const { handleSubmitSkill } = props;

    const handleLocalSubmit = (e) => {
        e.preventDefault();
        handleSubmitSkill(e, skill);
        setSkill("");
    }

    return (
        <form onSubmit={(e) => handleLocalSubmit(e)}>
            <h3>Add a skill</h3>
            <input 
                type="text" 
                onChange={(e) => setSkill(e.target.value)} 
                value={skill}
            />
            <button type="submit">Add Skill</button>
        </form>
    );
};

export default Form;