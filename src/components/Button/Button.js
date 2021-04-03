import React from 'react';
import './Button.css';

function Button({children, click}) {
  return <button onClick={click} className="Button">{children}</button>
}

export default Button
