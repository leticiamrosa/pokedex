import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { ButtonSearch } from '../../components/Buttons/Button';

import Header from '../../components/Header/Header';

class Home extends Component {
  
  render() {
    return (
      <div>
      <Header 
        titleBrand="Awesome Pokedex"
        labelButton="Buscar"
      />
      <Link to="/pokedex">
        <ButtonSearch backgroundcolor="green" color="white"> Pokedex</ButtonSearch>
      </Link>

      </div>
    )
  }
}

export default withRouter(Home);
