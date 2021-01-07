import React from 'react';
import { buildControls } from './buildCotrolsClasses';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = ({ ingredientAdded }) => {
  return (
    <div className={buildControls}>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => {
            ingredientAdded(ctrl.type);
            console.log('clicked');
          }}
        />
      ))}
    </div>
  );
};

export default BuildControls;
