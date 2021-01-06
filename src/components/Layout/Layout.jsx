import React from 'react';
import Hoc from '../../hoc/Hoc';
import { content } from './layoutClasses';

const Layout = ({ children }) => {
  return (
    <Hoc>
      <h2>Layout.jsx</h2>
      <main className={content}>{children}</main>
    </Hoc>
  );
};

export default Layout;
