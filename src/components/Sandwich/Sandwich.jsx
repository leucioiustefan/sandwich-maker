import React from 'react';
import SandwichIngredient from './SandwichIngredient/SandwichIngredient';
import { sandwich } from './sandwichClasses';

const Sandwich = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients)
    .map((ingKey) =>
      [...Array(ingredients[ingKey])].map((_, index) => (
        <SandwichIngredient key={ingKey + index} type={ingKey} />
      )),
    )
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add ingredients</p>;
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
