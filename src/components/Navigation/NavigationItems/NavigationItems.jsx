import React from 'react';
import { navigationItems } from './navigationItemsClasses';
import NavigationItem from './NavigationItem/NavigationItem';

const toBeAdded = () => {
  alert('To be added soon');
};

const NavigationItems = (props) => (
  <ul className={navigationItems}>
    <NavigationItem link='/' active>
      Sandwich Maker
    </NavigationItem>
    <NavigationItem link='/' added={toBeAdded}>
      Checkout
    </NavigationItem>
  </ul>
);

export default NavigationItems;
