import React, { useState } from 'react';

import './Button.css';

const Button = props => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}
      style={props.styleABC}>
      {props.children}
    </button>
  );
};

export default Button;
