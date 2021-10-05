import React, { useState, useEffect } from "react";
import { Router, Link } from "@reach/router";

const DisplayWordForm = (props) => {
    const [ word, setWord ] = useState("");
    const { handleSubmitWord } = props;

    const handleLocalSomethingSubmit = (e) => {
        e.preventDefault();
        handleSubmitWord(e, word);
        setWord("");
    };
    return (
        <div>
            <form onSubmit= {(e) => handleLocalSomethingSubmit(e)} >
                <label></label>
                <input 
                type="text" 
                onChange={(e)=>setWord(e.target.value)} 
                value={word}  
                />
                <button></button>
            </form>
        </div>
    );
};

export default DisplayWordForm;

