const User = (props) => {
    // must return at least one line of JSX
    console.log("props", props);
    // const { name, age, things, isEven } = props; // using destructuring to simplify
    return (
        <>
            <h1>Name: {props.name} / Age: {props.age}</h1>
            <h1>User Component</h1>
            <h1>Another line</h1>{" "}
        </>
    );
};

export default User;

// Learn platform shows anonymous export