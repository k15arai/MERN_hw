import React from "react";
import Item from "./Item";

const Display = (props) => {
    const { toDoArr, handleCheckbox, handleDeleteToDo } = props;

    return (
        <div>
            {toDoArr.map((itemObj, index) => (
                <Item 
                    handleCheckbox={handleCheckbox}
                    handleDeleteToDo={handleDeleteToDo}
                    itemObj={itemObj}
                    index={index}
                />
            ))}
        </div>
    );
}

export default Display;