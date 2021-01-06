import React from 'react';
import SandwichIngredient from './SandwichIngredient/SandwichIngredient';
import { sandwich } from './sandwichClasses';

const Sandwich = ({ ingredients }) => {
  let transformedIngredients = [];
  for (let ingredient in ingredients) {
    let quantity = ingredients[ingredient];
    for (let i = 0; i < quantity; i++) {
      transformedIngredients.push(
        <SandwichIngredient key={ingredient + i} type={ingredient} />,
      );
    }
  }
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={sandwich}>
      <SandwichIngredient type='bread-top' />
      {transformedIngredients}
      <SandwichIngredient type='bread-bottom' />
    </div>
  );
};

export default Sandwich;
