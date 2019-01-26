import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {id: 'a', name: 'Max', age: 23},
      {id: 'b', name: 'Eugene', age: 25},
      {id: 'c', name: 'Bob', age: 32}
    ],
    showPersons: false
  };
  
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    
    const person = {...this.state.persons[personIndex]};
  
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({persons})
  };
  
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons})
  };
  
  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  };
  
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'initial',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              name={person.name}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              age={person.age} />
          })}
        </div>
      );
      
      style.backgroundColor = 'red';
    }
    
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    
    return (
      <div className="App">
        <h1>Hi Eugene</h1>
        <p className={classes.join(' ')}>I am working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
