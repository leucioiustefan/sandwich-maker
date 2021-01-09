import React from 'react';
import Hoc from '../../hoc/Hoc';
import { content } from './layoutClasses';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = ({ children }) => {
  return (
    <Hoc>
      <Toolbar />
      <main className={content}>{children}</main>
    </Hoc>
  );
};

export default Layout;
