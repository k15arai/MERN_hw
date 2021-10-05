import React, { useState } from "react";

const Beatle = props => {
    console.log("BEATLE COMPONENT RENDER");
    const [ nLikes, setNLikes ] = useState(props.likes);
    
    // true false very useful states
    const [ hasIncreasedLikes, setHasIncreasedLikes ] = useState(false);
    
    const handleIncreaseLikes = () => {
        if (!hasIncreasedLikes) {
            setNLikes(nLikes + 1);
            setHasIncreasedLikes(true);
        } else {
            console.log("Max likes reached");
        }

    }
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h2>Instrument: {props.instrument}</h2>
            <h2>Likes: {nLikes}</h2>
            {/* <button onClick={() => setNLikes(nLikes + 1)}>Increase Likes</button> */}
            <button onClick={() => handleIncreaseLikes()}>Increase Likes</button>
            
            {/* Ternary */}
            {props.writesMusic ? <h3>Does write music</h3> : <h3>Does not write music</h3>}
            
            {/* Replace with above */}
            {/* <h2>Writes Music: {props.writesMusic}</h2> */}
        </div>
    );
};

export default Beatle;