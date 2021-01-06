import React, { Component } from 'react';
import Sandwich from '../../components/Sandwich/Sandwich';
import BuildControls from '../../components/Sandwich/BuildControls/BuildControls';
import Hoc from '../../hoc/Hoc';

class SandwichMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
    };
  }
  render() {
    return (
      <Hoc>
        <Sandwich ingredients={this.state.ingredients} />
        <BuildControls />
      </Hoc>
    );
  }
}

export default SandwichMaker;
