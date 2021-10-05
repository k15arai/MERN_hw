// import logo from './logo.svg';
import './App.css';
import React, { useReducer } from "react"; // need to import into each component, cannot pass as a prop

const initialState = {
  email: {
    text:"",
    error:"",
  },
  password: {
    text:"",
    error:"",
  },
  counter: 0,
};

const reducer = (state, action) => {
  switch(action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        email: {
          ...state.email,
          text: action.payload,
        },
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: {
          ...state.password,
          text: action.payload,
        },
      };
    case "SET_EMAIL_ERROR":
      return {
        ...state,
        email: {
          ...state.email,
          text: action.payload,
        },
      };
    case "INCREMENT_COUNTER":
      return {

      }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleEmailChange = (e) => {
    if (e.target.value.length < 6) {
      dispatch({
        type: "SET_EMAIL_ERROR",
        payload: "Email must be at least 6 characters",
      });
    } else {
      dispatch({
        type: "SET_EMAIL_ERROR",
        payload: "",
      });
    }
    dispatch({
      type: "SET_EMAIL",
      payload: e.target.value,
    });
  };
  const handlePasswordChange = (e) => {
    dispatch({
      type: "SET_PASSWORD",
      payload: e.target.value,
    });
  };
  const handleIncrement = () => {

  }
  return (
    <div className="App">
      <button onClick={dispatch({type: "INCREMENT_COUNTER" })} />
      <form>
        <div>
        Email:
        <input type="text" onChange={(e) => handleEmailChange(e)}
        value={state.email.text}
        />
        Password:
        <input type="text" onChange={(e) => handlePasswordChange(e)}
        value={state.password.text}
        />
        </div>
      </form>
      <h2>display info</h2>
      <h2>Email: {state.email}</h2>
      <h2>Password: {state.password.text}</h2>
    </div>
  );
}

export default App;

/* 

REDUX HIGH LEVEL OVERVIEW

3 DISTINCT SEQUENTIAL PARTS TO REDUX

1. User is going to do something in your app that is going to to change state
2. Dispatch an action, which is just an OBJECT w/ "type" and "payload"
3. Reducer receives the dispatch and changes the state.

*/