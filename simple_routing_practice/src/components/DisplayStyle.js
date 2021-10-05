const DisplayInput = (props) => {
    const { wordInput, textColor, highlightColor } = props;
    
    if (isNaN(wordInput) && isNaN(textColor) && isNaN(highlightColor)) {
        return (
            <>
            <h1 style={{backgroundColor: `${highlightColor}`, color: `${textColor}`}}>This word is: {wordInput}</h1>
            </>
        )
    } else {
        return (
            <h1>Please enter a word and two colors!</h1>
        )
    }
}

export default DisplayInput;