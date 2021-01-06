import React, { Component } from 'react';
import Sandwich from '../../components/Sandwich/Sandwich';
import BuildControls from '../../components/Sandwich/BuildControls/BuildControls';
import Hoc from '../../hoc/Hoc';
import { ingredients, ingredientPrices } from '../../utils';

class SandwichMaker extends Component {
  constructor(props) {
    super(props);
    this.state = ingredients;
  }

  addIngredientHandler = (type) => {};

  render() {
    return (
      <Hoc>
        <Sandwich ingredients={ingredients.content} />
        <BuildControls />
      </Hoc>
    );
  }
}

export default SandwichMaker;
