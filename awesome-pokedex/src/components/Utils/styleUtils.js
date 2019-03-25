import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { colors } from '../../styles/styles';

export const Container = styled(Grid)`
  flex-grow: 1;
  min-height: 100vh;
  background-color: ${props => props.background || colors.coolGrey};
  color: ${props => props.color || colors.coolGrey};
`;

export default { Container };
