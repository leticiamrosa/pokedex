import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';
import { colors, fonts } from '../../styles/styles';

export const NavContent = styled(Navbar)`
  background-color: ${props => props.background || colors.primary };

  .navbar-brand {
    color: ${props => props.color || colors.white };
    font-weight: ${fonts.bold};
  }
`;

export default { NavContent };