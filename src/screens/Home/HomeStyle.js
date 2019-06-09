import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { colors } from '../../styles/styles';

export const Container = styled(Grid)`
  background-color: ${colors.coolGrey};
  flex-grow: 1;
  min-height: 100vh;
`;

export default { Container };

