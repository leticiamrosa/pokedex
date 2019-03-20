import styled from 'styled-components';
import { Jumbotron } from 'react-bootstrap';
import { fonts, colors } from '../../styles/styles';

export const HeaderContainer = styled.div`
  
  h1 {
    color: ${colors.yellow};
    font-weight: ${fonts.bold};
  }

`;

export const Nav = styled.nav`
  background-color: ${colors.red};
`;


export const LandingPage = styled(Jumbotron)`
  background-color: transparent;
`;

export default { HeaderContainer };
