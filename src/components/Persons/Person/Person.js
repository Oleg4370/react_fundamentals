import React from 'react';
import './Person.css';

const person = (props) => {
    function additionalInfo() {
        if(props.children){
            return <i>{props.children}</i>
        }
    }
    return (
      <div className='Person'>
          <p> I'm new component "Person" and my name is {props.name} and I'm
              <b style={{'color':'red'}}>{props.age}</b> years old</p>
          {additionalInfo()}
          <div>
            <label htmlFor={props.dataId}>Change name: </label>
            <input type="text" id={props.dataId} value={props.name} onChange={props.change}/>
            <p><button onClick={props.inc}>Increment Age</button></p>
          </div>
        <button className="red" onClick={props.removeEvent}>X</button>
      </div>

    );
};

export default person;