// 4 pieces of information that are required

// 1) import the react library from React
import React from 'react';

// 2) create a functional component, the function itself. typically name it same as file
const Person = (props) => {
    // 3) group together the JSX commands. requires one parent component
    return (
        <div>
            <h2>I am a person!</h2>
        </div>
    )
}

// 4 export the file
export default Person;

