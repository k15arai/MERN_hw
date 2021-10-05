import './App.css';
import Person from './components/Person'; // relative to where you are right now
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      {/* self closing tag */}
      <Person /> 
      <Person /> 
      <Person /> 
      <Product 
        title={"Dehydrated Water"} 
        desc={"Just add 2 cups of water for a refreshing drink"} 
        cost={ 49.99 } 
        initialStock={5} />
      <Product 
        title={"Toy Car"} 
        desc={"Made out of legos"} 
        cost={ 19.99 } 
        initialStock = {15} />
      <Product 
        title={"iPad"} 
        desc={"Really expensive toy"} 
        cost={ 499.99 } 
        initialStock = {8} />
    </div>
  );
}

export default App;
