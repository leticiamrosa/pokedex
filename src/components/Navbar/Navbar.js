import React from 'react';
import { Link } from 'react-router-dom';
import { NavContent } from './NavbarStyle';

const Nav = ({
    title,
}) => (
  <NavContent>
  <Link to="/">
    <NavContent.Brand>{title}</NavContent.Brand>
  </Link>
  </NavContent>
);

export default Nav;
