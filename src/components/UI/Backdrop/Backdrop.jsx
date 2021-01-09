import React from 'react';
import { backDrop } from './backDropClasses';

const Backdrop = (props) =>
  props.show ? <div className={backDrop} onClick={props.clicked}></div> : null;

export default Backdrop;
