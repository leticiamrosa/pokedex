import React from 'react';
import { NavContent } from './NavbarStyle';

const Nav = ({
    title,
}) => (
  <NavContent>
    <NavContent.Brand href="#home">{title}</NavContent.Brand>
  </NavContent>
);

export default Nav;
