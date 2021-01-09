import React from 'react';
import { toolbar, logo, desktopOnly } from './toolbarClasses';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => (
  <header className={toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={logo}>
      <Logo />
    </div>
    <nav className={desktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
