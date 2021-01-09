import React from 'react';
import { toolbar } from './toolbarClasses';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = () => (
  <header className={toolbar}>
    <div>Menu</div>
    <Logo />
    <div>Logo</div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
