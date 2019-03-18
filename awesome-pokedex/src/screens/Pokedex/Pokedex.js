import React, { Component } from 'react'
import Header from '../../components/Header/Header';

class Pokedex extends Component {
  render() {
    return (
      <div>
        <Header titleBrand="Awesome Pokedex" labelButton="Buscar" />
        <h1>pokedex</h1>
      </div>
    )
  }
}

export default Pokedex;