import React from 'react';
import Person from './Person/Person';

class Persons extends React.Component {
  constructor(props) {
    super(props);
    console.log('Persons.js inside constructor');
  };
  
  componentWillMount() {
    console.log('Persons.js component will mount');
  };
  
  componentDidMount() {
    console.log('Persons.js component did mount');
  };
  
  componentWillReceiveProps(nextProps) {
    console.log('Persons.js UPDATE componentWillReceiveProps', nextProps);
  };
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Persons.js UPDATE shouldComponentUpdate', nextProps, nextState);
    return nextProps.persons !== this.props.persons;
  };
  
  componentWillUpdate(nextProps, nextState) {
    console.log('Persons.js UPDATE componentWillUpdate', nextProps, nextState);
  }
  
  componentDidUpdate() {
    console.log('Persons.js UPDATE componentDidUpdate');
  }
  
  render() {
    console.log('Persons.js render');
    return (
      this.props.persons.map((person, index) => {
        return <Person
          click={() => this.props.clicked(index)}
          key={person.id}
          name={person.name}
          changed={(event) => this.props.changed(event, person.id)}
          age={person.age}/>
      }
    ))
  }
}

export default Persons;