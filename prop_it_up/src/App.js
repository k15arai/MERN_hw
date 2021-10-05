import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  const thePersonCard = [
    {
      lastName: "Doe",
      firstName: "Jane",
      initialAge: 45,
      hairColor: "Black",
    },
    {
      lastName: "Smith",
      firstName: "John",
      initialAge: 88,
      hairColor: "Brown",
    },
    {
      lastName: "Fillmore",
      firstName: "Millard",
      initialAge: 50,
      hairColor: "Brown",
    },
    {
      lastName: "Smith",
      firstName: "Maria",
      initialAge: 62,
      hairColor: "Brown",
    },
  ];

  return (
    <div className="App">
      {/* // use map function here */}
      {thePersonCard.map((element) => (
        <PersonCard 
          key = {element.index}
          lastName = {element.lastName}
          firstName = {element.firstName}
          initialAge = {element.initialAge}
          hairColor = {element.hairColor} /> 
      ))}

      {/* <PersonCard 
        lastName={"Doe"}
        firstName={"Jane"}
        initialAge={ 45 }
        hairColor={"Black"}
      />
      <PersonCard 
        lastName={"Smith"}
        firstName={"John"}
        initialAge={ 88 }
        hairColor={"Brown"}
      />
      <PersonCard 
        lastName={"Fillmore"}
        firstName={"Millard"}
        initialAge={ 50 }
        hairColor={"Brown"}
      />
      <PersonCard 
        lastName={"Smith"}
        firstName={"Maria"}
        initialAge={ 62 }
        hairColor={"Brown"}
      /> */}
    </div>
  );
}

export default App;
