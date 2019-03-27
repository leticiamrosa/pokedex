import React from 'react';
import PropTypes from 'prop-types';
import CardPokemon from '../CardPokemon/CardPokemon';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Container } from '../Utils/styleUtils';
import Pagination from "react-js-pagination";


const Layout = ({
    pokemons,
    onChange,
    itemsCountPerPage,
    totalItemsCount,
    pageRangeDisplayed,
    activePage
}) => (
  <div>
    <Navbar title="AwesomePokedex" />
    <Container container>
      <CardPokemon 
        pokemons={pokemons}
      />
      <Container container style={{ minHeight: 0 }} justify="center" alignItems="center">
        <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={pageRangeDisplayed}
            onChange={onChange}
            // nextPageText="Proximo"
            // prevPageText="Anterior"
          />
      </Container>
      <Footer />
    </Container>
  </div>
);

Layout.propTypes = {
  title: PropTypes.string,
  itemsCountPerPage: PropTypes.number,
  totalItemsCount: PropTypes.number,
  pageRangeDisplayed: PropTypes.number,
  activePage: PropTypes.number,
  onChange: PropTypes.func,
}

export default Layout;
