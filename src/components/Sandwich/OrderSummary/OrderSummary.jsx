import React from 'react';
import Hoc from '../../../hoc/Hoc';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => (
    <li key={igKey}>
      {props.ingredients[igKey]}
      <span style={{ textTransform: 'capitalize' }}> {igKey}</span>
    </li>
  ));
  return (
    <Hoc>
      <h3>Your sandwich</h3>
      <ul style={{ listStyleType: 'none', padding: '1rem' }}>
        {ingredientSummary}
      </ul>
      <p style={{ fontWeight: 'bold' }}>Continue with checkout?</p>
      <p style={{ marginTop: '1rem' }}>
        <strong>Total price is {props.price.toFixed(1)} USD</strong>
      </p>
      <Button btnType='danger' clicked={props.purchaseCanceled}>
        Cancel
      </Button>
      <Button btnType='success' clicked={props.purchaseContinued}>
        Continue
      </Button>
    </Hoc>
  );
};

export default OrderSummary;
