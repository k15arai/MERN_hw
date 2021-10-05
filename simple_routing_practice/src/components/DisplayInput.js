const DisplayInput = (props) => {
    const { input } = props;
    
    if (isNaN(input)) {
        return (
            <>
            <h1>This word is: {input}</h1>
            </>
        )
    } else {
        return (
            <h1>This number is: {input}</h1>
        )
    }
}

export default DisplayInput;