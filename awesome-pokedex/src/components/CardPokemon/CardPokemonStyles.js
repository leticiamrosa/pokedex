import styled from 'styled-components';
// import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import { colors, fonts } from '../../styles/styles';

// install();

export const styles = {
  root: {
    flexGrow: 1,
  },
  cardPokemon: {
    height: 300,
    width: 200,
    margin: 16,
  },
  media: {
    height: 140,
  }
};

export const Image = styled.img`
  /* position: absolute;  */
`;

export const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10em;
  width: 100%;
  background-color: ${colors.grey};
`;

export const ButtonInfo = styled(Button)``;

export const Typographys = styled(Typography)`
  color: ${colors.coolGrey} !important;
  padding-top: 0.4em;
  padding-bottom: 0.4em;

  ::first-letter {
    text-transform: uppercase !important;
  }
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1em;
`;

export const Card = styled(Paper)`
  background-color: ${colors.light} !important;

  p {
    font-weight: ${fonts.bold};
    color: ${colors.coolGrey} !important;
    padding-right: 1em;
  }
`;

export const CardFooter = styled.div`
  padding-right: 1em;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const PokemonType = styled(Chip)`
  background-color: ${props => props.background} !important;
  color: ${colors.white} !important;
  border-radius: 3px !important;
  padding-left: 0.8em !important;
  padding-right: 0.8em !important;
`;

export default { Card };
