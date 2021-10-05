// lifting state - what other components need 
import React, { useState } from "react";

const Form = (props) => {
    const [ boxColor, setBoxColor ] = useState("");
    const { handleColorSubmit } = props;

    const handleLocalSubmit = (e) => {
        e.preventDefault();
        handleColorSubmit(e, boxColor);
        setBoxColor("");
    };

    return (
        <form onSubmit={(e) => handleLocalSubmit(e)}>
            <input 
                type="text" 
                onChange={(e) => setBoxColor(e.target.value)}
                value={boxColor}
            />
            <button type="submit">
                Add
            </button>
        </form>
    );
}

export default Form;