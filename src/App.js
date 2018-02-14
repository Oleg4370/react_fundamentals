import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Persons from './components/Persons/Persons'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {id:'1', name: 'Oleh', age: 29},
        {id:'2', name: 'Alina', age: 26,
          content: 'Hobbies: sleep:)'},
        {id:'3', name: 'Thomas', age: 29}
      ],
      showPersons: false
    };
  }

  getPersons = () => {
    return <Persons
      persons = {this.state.persons}
      toggleEvent = {this.toggleListHandler}
      showState = {this.state.showPersons}
      inputChangeEvent = {this.changeNameHandler}
      btnClickEvent = {this.incrementAgeHandler}
      removeElement = {this.removeElementHandler}/>;
  };

  getPersonIndexById = (id) => this.state.persons.findIndex((item)=>item.id === id);

  incrementAgeHandler = (id) => {
    let tempPersonsArray = [...this.state.persons];
    tempPersonsArray[this.getPersonIndexById(id)].age++;
    this.setState({
      persons: tempPersonsArray
    })
  };

  changeNameHandler = (event,id) => {
    let tempPersonsArray = this.state.persons.slice();
    tempPersonsArray[this.getPersonIndexById(id)].name = event.target.value;
    this.setState({persons: tempPersonsArray});
  };

  toggleListHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  };

  removeElementHandler = (id) => {
    let tempPersons = [...this.state.persons];
    tempPersons.splice(this.getPersonIndexById(id),1);
    this.setState({persons: tempPersons});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.getPersons()}
      </div>
    );
    //return React.createElement('div', {className: "App"}, React.createElement('h1', {className: 'App-title'}, 'Welcome to React'));
  }
}

export default App;
