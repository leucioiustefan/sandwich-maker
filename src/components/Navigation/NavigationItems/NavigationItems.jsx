import React from 'react';
import { navigationItems } from './navigationItemsClasses';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
  <ul className={navigationItems}>
    <NavigationItem link='/' active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link='/'>Checkout</NavigationItem>
  </ul>
);

export default NavigationItems;
