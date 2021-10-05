import React, { useState } from "react";

const Form = (props) => {
    const [ toDo, setToDo ] = useState("");
    const { handleSubmitToDo } = props;

    const handleLocalSubmitToDo= (e) => {
        e.preventDefault();
        handleSubmitToDo(e, toDo);
        setToDo("");
    };

    return (
        <form onSubmit={(e) => handleLocalSubmitToDo(e)}>
            <input
                type="text"
                onChange={(e) => setToDo(e.target.value)}
                value={toDo}
            />
            <button style={{ backgroundColor: "blue", color: "white" }} type="submit">Add</button>
        </form>
    );
}

export default Form;