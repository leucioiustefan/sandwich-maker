import React from 'react';
import { buildControl, label, less, more } from './buildControlClasses';

const BuildControl = (props) => {
  return (
    <div className={buildControl}>
      <div className={label}>{props.label}</div>
      <button
        className={less}
        onClick={props.removed}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className={more} onClick={props.added}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
