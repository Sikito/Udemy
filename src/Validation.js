import React from 'react';

const validation = props => {
  let validationText = 'Text too short ! ';
  let style = {
    color: '#c62828'
  };

  if (props.textLenght >= 5) {
    validationText = 'Text Long enough ! ';
    style.color = '#64dd17';
  }

  return <p style={style}>{validationText}</p>;
};

export default validation;
