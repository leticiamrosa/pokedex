import React from 'react';
import PropTypes from 'prop-types';
import CardPokemon from '../CardPokemon/CardPokemon';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Container } from '../Utils/styleUtils';


const Layout = ({
    pokemons,
}) => (
  <div>
    <Navbar title="AwesomePokedex" />
    <Container container>
      <CardPokemon 
        pokemons={pokemons}
      />
      <Footer />
    </Container>
  </div>
);

Layout.propTypes = {
  pokemons: PropTypes.any,
}

export default Layout;
