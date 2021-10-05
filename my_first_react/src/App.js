import logo from './logo.svg';
import './App.css';
import './style.css';
import User from "./components/User.js";

const App = () => {
  const oneLineJSX = <h1>Some JSX</h1>;
  const logStuff = () => {
    console.log("Logging some stuff");
  }
  const multiLineJSX = (
    <>
      <h2>multiline</h2>
      <h2>JSX</h2>
    </>
  );
  const word = "pineapple";

  const isEven = (n) => {
    if (n % 2 === 0) {
      return <h1>{n} is even</h1>;
    } else {
      return <h1>{n} is odd</h1>;
    }
  };

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <User name={"Mathilda"} age={35} things={["this", "that", { a: "b" }, [1, 2, 3, 4, 5]]}/>
      <h1 style={{color: "red", fontSize: "30px"}}>Hello World: {word}</h1>
      {oneLineJSX}
      {multiLineJSX}
      {isEven(3)}
      <img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" alt= ""></img>
      {logStuff()}
      {() => console.log("this is printing")}
    </div>
  );
}

export default App;
