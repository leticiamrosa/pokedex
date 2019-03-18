import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';
import { fonts } from '../../styles/styles';

export const NavHeader = styled(Navbar)`
  background-color: ${props => props.backgroundcolor};

  .navbar-brand {
    color: ${props => props.color};
    font-weight: ${fonts.bold};
  }
`;

export default { NavHeader };
