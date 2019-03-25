import styled from 'styled-components';
import {
  Typography,
  Paper,
} from '@material-ui/core';
import { colors, fonts } from '../../styles/styles';


export const styles = {
  cardPokemon: {
    height: 300,
    width: 200,
  },
};

export const Typographys = styled(Typography)`
  color: ${colors.coolGrey} !important;
  padding-top: 0.4em;
  padding-bottom: 0.4em;

  ::first-letter {
    text-transform: uppercase !important;
  }
`;

export const Card = styled(Paper)`
  background-color: ${colors.light} !important;

  p {
    font-weight: ${fonts.bold};
    color: ${colors.coolGrey} !important;
    padding-right: 1em;
  }
`;

export default { Card };
