import styled from 'styled-components';
import { Grid, CircularProgress } from '@material-ui/core';
import { colors } from '../../styles/styles';

export const ContainerSpinner = styled(Grid)`
  flex-grow: 1;
  min-height: 100vh;
`;

export const ContentSpinner = styled(Grid)``;

export const Spinner = styled(CircularProgress)`
  color: ${props => props.spinnercolor || colors.primary} !important;
`;

export default { ContainerSpinner };
