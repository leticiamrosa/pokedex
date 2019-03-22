import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { colors, fonts } from '../../styles/styles';

export const PokemonCard = styled(Card)`
  max-width: 345px;
`;

export const Navbar = styled(AppBar)`
  background-color: ${colors.green};

  h5 {
    color: ${props => colors.white};
    font-weight: ${fonts.bold};
  }
`;

export const Nav = styled(Toolbar)`
  background-color: ${props => props.background};
  color: ${colors.white};
`;

export const Typographys = styled(Typography)`
  color: ${props => props.color || colors.light};
`;

export const Footer = styled(Grid)`
  background: red;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
`;

export default { PokemonCard };
