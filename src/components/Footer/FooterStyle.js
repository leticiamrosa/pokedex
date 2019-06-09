import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';
import { colors } from '../../styles/styles';


export const Typographys = styled(Typography)`
  color: ${props => props.color || colors.light};

  p {
    color: ${colors.white};
  }

`;

export const FooterBar = styled(Grid)`
  background: red;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
`;

export default { FooterBar };
