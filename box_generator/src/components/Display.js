import React, { useState } from "react";

const Display = (props) => {
    const { boxColorArr } = props;
    return (
    <>
    <h1>BOXES</h1>
        {boxColorArr.map((color, index) => (
                <div
                style={{
                    display: "inline-block",
                    marginLeft: "15px",
                    border: "2px solid black",
                    backgroundColor: color,
                    height: "250px",
                    width: "250px",
                }}
                key={index}
                >
            </div>
        ))}
    </>
    );
}

export default Display;