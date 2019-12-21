import React from 'react';
import Person from './Person/Person';

import classes from '../App.module.css';

const persons = props => {
  return (
    <div>
      {props.persons.map((person, index) => {
        return (
          <Person
            cssClass={classes.Person}
            click={props.deletePersonHandler}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={event => this.nameChangedHandler(event, person.id)}
          />
        );
      })}
    </div>
  );
};

export default persons;
