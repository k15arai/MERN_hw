const DisplayWord = (props) => {
    const { firstWord, secondWord } = props;
    
    if (isNaN(firstWord) && isNaN(secondWord)) {
        return (
            <>
            <h1>TEXT1: {firstWord}</h1>
            <h1>TEXT2: {secondWord}</h1>
            </>
        )
    } else if (!isNaN(firstWord) && !isNaN(secondWord)) {
        return (
            <>
            <h1>{firstWord} is a number.</h1>
            <h1>{secondWord} is a number.</h1>
            </>
        )
    } else {
        return (
            <h1>{firstWord} or {secondWord} is a number</h1>
        )
    }
    // return (
    //     <>
    //         <h1>Display Component:</h1>
    //         <h1>Word 1: {props.firstWord}</h1>
    //         <h1>Word 2: {props.secondWord}</h1>
    //     </>
    // );
    //{/* console.log(isNaN("hello")); */}
}

export default DisplayWord;