import React, { useState } from "react";
import { navigate } from "@reach/router";

const DisplayStyleForm = (props) => {
    const [ wordInput, setWordInput ] = useState("");
    const [ textColor, setTextColor ] = useState("");
    const [ highlightColor, setHighlightColor ] = useState("");

    return (
        <form onSubmit={(e) => navigate(`/${wordInput}/${textColor}/${highlightColor}`)}>
            <label>Enter a word:</label>
            <input
                type="text"
                onChange={(e) => setWordInput(e.target.value)}
                value={wordInput}
            />
            <label>Enter a color for the text:</label>
            <input
                type="text"
                onChange={(e) => setTextColor(e.target.value)}
                value={textColor}
            />
            <label>Enter a color to highlight the text:</label>
            <input
                type="text"
                onChange={(e) => setHighlightColor(e.target.value)}
                value={highlightColor}
            />
            <button style={{ backgroundColor: "blue", color: "white" }} type="submit">Submit</button>
        </form>
    )
}

export default DisplayStyleForm;