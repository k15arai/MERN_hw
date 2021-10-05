import React, { useState, useEffect } from "react";
import { Router, Link } from "@reach/router";

const DisplayNumberForm = () => {
    const handleSomethingElseSubmit = () => {

    };
    
    return (
        <div>
            <form onSubmit="handleSomethingSubmit">
                <label></label>
                <input 
                type="text" 
                onChange={(e)=>"setSomething(e.target.value)"} 
                value="{something}"  
                />
                <button></button>
            </form>
        </div>
    );
};

export default DisplayNumberForm;