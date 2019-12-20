import React from 'react';

const character = props => {
  return (
    <span className={props.cssClass} onClick={props.clicked}>
      {props.value}
    </span>
  );
};

export default character;
