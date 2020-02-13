import React, { Component } from 'react';
import Person from "./Person/Person"
import './App.css';

class App extends Component {
  state = {
    persons: [
      {id:"1", name: 'Manu', age: 29},
      {id:"2", name: 'Max', age: 28},
      {id:"3", name: 'Stephany', age: 30}
    ],
    otherState: 'some other value',
    showPersons: false
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(per => {
      return per.id === id;
    })

    const newPerson = {...this.state.persons[personIndex]}
   
    newPerson.name = event.target.value;

    const newPersons = [...this.state.persons];
    
    newPersons[personIndex] = newPerson;

    this.setState({
      persons: newPersons
    })
   
  }

  deleteHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    if (this.state.showPersons){
      this.setState({showPersons: false})
    } else {
      this.setState({showPersons: true})
    }
  }
  
  render () {
    const style = {
      backggroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }

    let persons = null;

    if  (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person 
              key={person.id}
              click={() => this.deleteHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event)=> this.nameChangedHandler(event, person.id)}
              />
            )
          })}

          
        </div>
      );
    }

    return (
      <div className="App">
        <h1>HI</h1>
        <button 
          style={style}
          onClick={this.togglePersonHandler}
        >Show person Toggle</button>
        {persons}
      </div>
    );
  }  
    
}

export default App;


// ASSIGNMENT FOR MODULE 3
// import React, { Component } from 'react';
// import './App.css';
// import UserInput from "./UserInput/UserInput";
// import UserOutput from "./UserOutput/UserOutput";

// export default class App extends Component {
//   state = {
//     username: 'Trai'
//   }

//   handleUserInput = (event) => {
//     this.setState({username: event.target.value})
//   } 

//   render() {
    
//     return (
//       <div>
//         <UserInput 
//           onChange={this.handleUserInput}/>
//         <UserOutput 
//           text="hello i am user input 1" 
//           username={this.state.username}/>
//         <UserOutput 
//           text="hello i am user input 2"
//           username={this.state.username}/>
//       </div>
//     )
//   }
// }






