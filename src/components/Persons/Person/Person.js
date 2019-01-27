import React from 'react';
import classes from './Person.css';

class Person extends React.Component {
  constructor(props) {
    super(props);
    console.log('Person.js inside constructor');
  };
  
  componentWillMount() {
    console.log('Person.js component will mount');
  };
  
  componentDidMount() {
    console.log('Person.js component did mount');
  };
  
  render() {
    console.log('Person.js render');
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>I am a {this.props.name} and {this.props.age} old</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
    )
  }
}

export default Person;