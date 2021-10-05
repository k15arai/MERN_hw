import React from "react";

const Item = (props) => {
    const { handleCheckbox, handleDeleteToDo, itemObj, index } = props;
        
    return (
        <div key={index}>
            <label style={{ textDecorationLine: itemObj.complete === true ? 'line-through' : 'none' }} htmlFor={"element-"+index.toString()} >{itemObj.toDo}</label>
            <input 
                type="checkbox"
                name={"element-"+index.toString()} 
                onChange={() => handleCheckbox(index)} 
                checked={itemObj.complete === true ? "checked" : ""}
            />
            <button
                name={"element-"+index.toString()}
                style={{ backgroundColor: "black", color: "white" }}
                onClick={() => handleDeleteToDo(index)}
            >
            Delete
            </button>
            <hr></hr>
        </div>
    );
};

export default Item;