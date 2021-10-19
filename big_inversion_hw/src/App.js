import './App.css';
import MyNewPersonCard from './components/MyNewPersonCard';

function App() {

  return (
    <div className="App">
      <MyNewPersonCard firstName="Jane" lastName="Doe" age={ 45 } hairColor="Black"/>
      <MyNewPersonCard firstName="John" lastName="Smith" age={ 88 } hairColor="Black"/>
      <MyNewPersonCard firstName="Millard" lastName="Fillmore" age={ 50 } hairColor="Brown"/>
      <MyNewPersonCard firstName="Maria" lastName="Smith" age={ 62 } hairColor="Brown"/>
    </div>
  );
}

export default App;
