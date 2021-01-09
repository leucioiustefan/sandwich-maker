import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import { logo } from './logoClasses';

const Logo = (props) => (
  <div className={logo}>
    <img src={burgerLogo} alt='burger logo' />
  </div>
);

export default Logo;
