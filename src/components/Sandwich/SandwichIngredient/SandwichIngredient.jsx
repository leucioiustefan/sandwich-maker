import React, { Component } from 'react';
import {
  breadBottom,
  breadTop,
  seeds1,
  seeds2,
  meat,
  cheese,
  salad,
  bacon,
} from './ingredientsClasses';
import PropTypes from 'prop-types';

class SandwichIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case 'bread-bottom':
        ingredient = <div className={breadBottom}></div>;
        break;
      case 'bread-top':
        ingredient = (
          <div className={breadTop}>
            <div className={seeds1}></div>
            <div className={seeds2}></div>
          </div>
        );
        break;
      case 'meat':
        ingredient = <div className={meat}></div>;
        break;
      case 'cheese':
        ingredient = <div className={cheese}></div>;
        break;
      case 'salad':
        ingredient = <div className={salad}></div>;
        break;
      case 'bacon':
        ingredient = <div className={bacon}></div>;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

SandwichIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default SandwichIngredient;
