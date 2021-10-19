import React, { Component } from 'react';

class MyNewPersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
        }
    }

    birthdayTime = () => {
        console.log(this.state.age);
        this.setState((state) => {
            return { 
                age: state.age + 1,
            } 
            });
    }

    render() {
        return(
        <div>
            <h1>{ this.props.lastName }, { this.props.firstName }</h1>
            <p>Age: { this.state.age }</p>
            <p>Hair Color: { this.props.hairColor }</p>
            <button onClick={ this.birthdayTime }>Birthday Button for { this.props.firstName } { this.props.lastName }</button>
        </div>
        );
    }
}

export default MyNewPersonCard;