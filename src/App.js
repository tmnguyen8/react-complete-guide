import React, { useState } from 'react';
import Person from "./Person/Person"
import './App.css';

const App = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephany', age: 30}
    ]
  })

  const switchNameHandler = () => {
    // console.log(`was clicked`)
    setPersonState({
      persons: [
        {name: 'hello', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephany', age: 30}
      ]
    })
  }
  
  console.log(personState)
  
    return (
      <div className="App">
        <h1>HI</h1>
        <button onClick={switchNameHandler}>Change name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}>My hobby is basketball</ Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, 'h1', "Hi, I'm a react app")
  
}

export default App;





