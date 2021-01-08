import React from 'react';
import Hoc from '../../../hoc/Hoc';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => (
    <li key={igKey}>
      <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
      {props.ingredients[igKey]}
    </li>
  ));
  return (
    <Hoc>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue with checkout?</p>
    </Hoc>
  );
};

export default OrderSummary;
