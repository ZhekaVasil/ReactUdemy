import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js inside constructor');
  };
  
  componentWillMount() {
    console.log('App.js component will mount');
  };
  
  componentDidMount() {
    console.log('App.js component did mount');
  };
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('App.js UPDATE shouldComponentUpdate', nextProps, nextState);
    return true;
  };
  
  componentWillUpdate(nextProps, nextState) {
    console.log('App.js UPDATE componentWillUpdate', nextProps, nextState);
  }
  
  componentDidUpdate() {
    console.log('App.js UPDATE componentDidUpdate');
  }
  
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
    console.log('App.js render');
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
      );
    }
    
    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
          persons={this.state.persons}/>
        {persons}
      </div>
    );
  }
}

export default App;
