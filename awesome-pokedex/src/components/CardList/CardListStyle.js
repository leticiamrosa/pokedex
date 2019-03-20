import styled from 'styled-components';
import { Alert, Col } from 'react-bootstrap';
import colors from '../../styles/colors';

export const Badge = styled(Alert)`
  background-color: ${props => props.background};
  color: ${props => props.color || colors.white};
  margin-right: 1em;
`;

export const Grid = styled(Col)`
 .card__title {
    :first-letter {
      text-transform: uppercase;
    }
 }
`;

export default { Badge };
