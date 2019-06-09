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
  
  :hover {
      color: ${colors.light} !important;
  }
`;

export const Card = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.light} !important;

  p {
    font-weight: ${fonts.bold};
    color: ${colors.coolGrey} !important;
    padding-right: 1em;
  } 

  :hover {
    transform: scale(1.2);
    background-color: ${colors.primary} !important;
  }
`;

export default { Card };
