import React, { useState } from "react";
import Form from './Form';
import Display from './Display';

function Todo() {
// states
// const [ toDo, setToDo ] = useState(""); moved to Form.js
const [ toDoArr, setToDoArr ] = useState([]);

// Create
const handleSubmitToDo = (e, toDo) => {
    e.preventDefault();
    const newToDo = {
        toDo: toDo,
        complete: false,
    };
    setToDoArr([newToDo, ...toDoArr ]);
    // setToDo("");
};

// Read data below form

// Update if checkbox is checked
const handleCheckbox = (index) => {
    let toDoCompletionUpdate = { ...toDoArr[index] };
    console.log(toDoCompletionUpdate);
    toDoCompletionUpdate.complete = !toDoCompletionUpdate.complete;

    setToDoArr(
        [...toDoArr.slice(0,index), toDoCompletionUpdate].concat(toDoArr.slice(index+1)
        )
    );
};

// Delete
const handleDeleteToDo = (index) => {
    const filteredArr = toDoArr.filter((element, idx) => idx !== index);
    setToDoArr(filteredArr);
};

return (
    <div>
    <h1>Add Item To ToDo List</h1>
    <Form
        handleSubmitToDo={handleSubmitToDo}
    />

    {/* Read Data */}
    <h2>My ToDo List</h2>
    <Display 
        toDoArr={toDoArr}
        handleCheckbox={handleCheckbox}
        handleDeleteToDo={handleDeleteToDo}
    />
    </div>
    )
}

export default Todo;
