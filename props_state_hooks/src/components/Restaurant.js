const Restaurant = (props) => {
    const { name, type, address } = props;
    return (
        <div>
            <h3>{ name }</h3>
            <h3>{ type }</h3>
            <h3>{ address }</h3>
        </div>
    );
};

export default Restaurant;