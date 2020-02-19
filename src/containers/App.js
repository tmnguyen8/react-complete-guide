import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit";
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
// import WithClass from "../hoc/WithClass";
import AuthContext from '../context/auth-context';



class App extends Component {
constructor(props) {
  super(props);
  console.log('[App.js] constructor');
}

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 50 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    isAuthenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  } 

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
  }

  loginHandler = () =>{
      this.setState({isAuthenticated: true})
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    console.log('[App.js] rendering ...')
    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <Persons 
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}
          isAuthenticated = {this.state.isAuthenticated}
        />
      )
    }
    

    return (

      <div className={classes.App}>
        <button onClick={()=>{this.setState({showCockpit: false})}}>Remove Cockpit</button>

        <AuthContext.Provider value={{
          isAuthenticated: this.state.isAuthenticated,
          login: this.loginHandler
        }}>
          {
            this.state.showCockpit?
              <Cockpit  
                title = {this.props.appTitle}
                showPersons = {this.state.showPersons}
                persons = {this.state.persons}
                clicked = {this.togglePersonsHandler}
                personsLength = {this.state.persons.length}
                login={this.loginHandler}
              />:
              null
          }
        {persons}
        </AuthContext.Provider>
        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
