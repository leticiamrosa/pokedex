import React, { Component } from 'react'
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';

class Pokedex extends Component {
  render() {
    return (
      <div>
        <Header titleBrand="Awesome Pokedex" labelButton="Buscar" />
        <Card />
      </div>
    )
  }
}

export default Pokedex;