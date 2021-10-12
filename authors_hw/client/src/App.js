import './App.css';
import { Router } from "@reach/router";
import DisplayAllAuthors from './components/DisplayAllAuthors';
import Form from './components/Form';
import EditAuthor from './components/EditAuthor';


function App() {
  return (
    <div className="App">
      <Router>
        <DisplayAllAuthors path="/" />
        <Form path="/new" />
        <EditAuthor path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
