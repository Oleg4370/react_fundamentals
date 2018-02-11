import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id:'1', name: 'Oleh', age: 29},
      {id:'2', name: 'Alina', age: 26,
      content: 'Hobbies: sleep:)'},
      {id:'3', name: 'Thomas', age: 29}
    ]
  };

  getPersons = () => {
    return this.state.persons.map((item,i)=>{
      return (<Person
        name={item.name}
        age={item.age}
        key={item.id}
        dataId={item.id}
        change={(event)=>this.changeNameHandler(event,i)}
        inc={()=>this.incrementAgeHandler(i)}>{item.content || ''}</Person>);
    });
  };

  incrementAgeHandler = (index) => {
    let tempPersonsArray = this.state.persons.slice();
    tempPersonsArray[index].age++;
    this.setState({
      persons: tempPersonsArray
    })
  };

  changeNameHandler = (event,index) => {
    let tempPersonsArray = this.state.persons.slice();
    tempPersonsArray[index].name = event.target.value;
    this.setState({persons: tempPersonsArray})
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.getPersons()}
        {/*{this.state.persons.map((item,i) => <Person age={item.age} key={i} name={item.name}/>)}*/}
      </div>
    );
    //return React.createElement('div', {className: "App"}, React.createElement('h1', {className: 'App-title'}, 'Welcome to React'));
  }
}

export default App;
