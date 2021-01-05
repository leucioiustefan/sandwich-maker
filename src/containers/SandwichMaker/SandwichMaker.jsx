import React, { Component } from 'react';
import Sandwich from '../../components/Sandwich/Sandwich';
import Hoc from '../../hoc/Hoc';

class SandwichMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 1,
        bacon: 1,
        cheese: 2,
        meat: 2,
      },
    };
  }
  render() {
    return (
      <Hoc>
        <Sandwich ingredients={this.state.ingredients} />
        <div>Controls</div>
      </Hoc>
    );
  }
}

export default SandwichMaker;
