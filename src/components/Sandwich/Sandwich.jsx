import React from 'react';
import SandwichIngredient from './SandwichIngredient/SandwichIngredient';
import { sandwich } from './sandwichClasses';

const Sandwich = ({ ingredients }) => {
  const transformedIngredients = Object.keys(ingredients).map((ingKey) =>
    [...Array(ingredients[ingKey])].map((_, index) => (
      <SandwichIngredient key={ingKey + index} type={ingKey} />
    )),
  );
  return (
    <div className={sandwich}>
      <SandwichIngredient type='bread-top' />
      {transformedIngredients}
      <SandwichIngredient type='bread-bottom' />
    </div>
  );
};

export default Sandwich;
