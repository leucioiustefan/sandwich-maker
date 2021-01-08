import React from 'react';
import { modal } from './modalClasses';

const Modal = (props) => {
  return (
    <div
      className={modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
      }}
    >
      {props.children}
    </div>
  );
};
export default Modal;
