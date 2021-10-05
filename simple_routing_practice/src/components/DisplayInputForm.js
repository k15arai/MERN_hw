import React, { useState } from "react";
import { navigate } from "@reach/router";

const DisplayInputForm = (props) => {
    const [ input, setInput ] = useState("");

    return (
        <form onSubmit={(e) => navigate(`/${input}`)}>
            <input
                type="text"
                onChange={(e) => setInput(e.target.value)}
                value={input}
            />
            <button style={{ backgroundColor: "blue", color: "white" }} type="submit">Enter Something</button>
        </form>
    )
}

export default DisplayInputForm;