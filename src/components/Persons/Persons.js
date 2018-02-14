import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
  return (props.persons.length)?
    (<div>
    <p><button onClick={props.toggleEvent}>Show list of Users</button></p>
    {(props.showState) ?
      (props.persons.map((item)=> (<Person
        name={item.name}
        age={item.age}
        key={item.id}
        dataId={item.id}
        change={(event)=>props.inputChangeEvent(event,item.id)}
        inc={()=>props.btnClickEvent(item.id)}
        removeEvent={()=>props.removeElement(item.id)}>{item.content || ''}
      </Person>))) : null
    }
  </div>): null
};

export default persons;
