import React from 'react';
import { drawerToggle } from './drawerToggleClasses';

const DrawerToggle = (props) => (
  <div onClick={props.clicked} className={drawerToggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DrawerToggle;
