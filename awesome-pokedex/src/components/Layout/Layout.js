import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {
  Navbar,
  Nav,
  Footer,
  Typographys,
} from './LayoutStyle';
import MaterialCard from '../../components/MaterialCard/MaterialCard';
import { colors } from '../../styles/styles'

const Layout = ({
    title,
    pokemons,
}) => (
    <div style={{ flexGrow: 1, backgroundColor: colors.coolGrey }}>
      <Navbar position="static">
        <Nav background="coral" >
          <Typographys variant="h5">{title}</Typographys>
        </Nav>
      </Navbar>
      <MaterialCard 
        pokemons={pokemons}
      />
      <Footer container>
        <Grid item xs={12}>
          <Typographys style={{ color: 'white'}}variant="body1" >Made with <span role="img" aria-label="Emoticon de coração">️❤️</span></Typographys>
        </Grid>
      </Footer>
    </div>
);

Layout.propTypes = {
  title: PropTypes.string,
}

export default Layout;
