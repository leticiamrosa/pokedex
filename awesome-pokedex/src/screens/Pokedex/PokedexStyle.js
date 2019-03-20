import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { colors } from '../../styles/styles';

export const ContainerPokedex = styled.div`
  background-color: ${props => props.background || colors.black};
  height: 100vh;
`;

export default { Container };