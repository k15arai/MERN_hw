// type sfc

const DisplayWord = (props) => {
    const {word} = props;
    console.log("DISPLAY WORD RENDER");
    return <h1>WORD IS {word}</h1>;
};

export default DisplayWord;