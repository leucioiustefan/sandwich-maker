import React from 'react';
import { buildControls, orderButton } from './buildCotrolsClasses';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = ({
  ingredientAdded,
  ingredientRemoved,
  disabled,
  price,
  purchasable,
}) => {
  return (
    <div className={buildControls}>
      <p>
        Current price: <strong>{price.toFixed(1)}</strong> USD
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => ingredientAdded(ctrl.type)}
          removed={() => ingredientRemoved(ctrl.type)}
          disabled={disabled[ctrl.type]}
        />
      ))}
      <button className={orderButton} disabled={!purchasable}>
        Order now!
      </button>
    </div>
  );
};

export default BuildControls;
