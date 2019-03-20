import styled from 'styled-components';
import {
  Card,
  Button,
  Row,
  Col,
  Container,
} from 'react-bootstrap';
import { colors } from '../../styles/styles';

export const CardPokemon = styled(Card)`
  /* border: 1em solid ${colors.primary}; */
  background-color: ${colors.white};
  border: none;

 .card__title {
    :first-letter {
      text-transform: uppercase;
    }
 }

  img {
    /* border-bottom: 1px solid #333; */
    border-bottom-left-radius: 4em;
    border-bottom-right-radius: 4em;
    background-color: ${colors.light};
  }
`;

export const CardButton = styled(Button)``;

export const CardContainer = styled(Container)`
  background-color: ${colors.grey}
`;

export const CardRow = styled(Row)`
`;

export const CardGrid = styled(Col)`
`;

export default { CardPokemon };
