import React from 'react';
import { button, success, danger } from './buttonClasses';

const Button = ({ btnType, children, clicked }) => {
  let typeOfBtn;
  if (btnType === 'success') {
    typeOfBtn = (
      <button className={button + ' ' + success} onClick={clicked}>
        {children}
      </button>
    );
  } else {
    typeOfBtn = (
      <button className={button + ' ' + danger} onClick={clicked}>
        {children}
      </button>
    );
  }
  return typeOfBtn;
};
export default Button;
