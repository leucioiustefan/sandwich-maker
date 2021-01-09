import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import { sideDrawer, open, closed, logo } from './sideDrawerClasses';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Hoc from '../../../hoc/Hoc';

const SideDrawer = (props) => {
  let attachedClases = [sideDrawer, closed];
  if (props.open) {
    attachedClases = [sideDrawer, open];
  }
  return (
    <Hoc>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClases.join(' ')}>
        <div className={logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Hoc>
  );
};

export default SideDrawer;
