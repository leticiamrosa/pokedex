import React, { Component } from 'react'
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import { ButtonSearch } from '../../components/Buttons/Button';

import * as actionCreators from '../../store/actions/index';

class Pokedex extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      search: '',
      imagePokemon: null,
      loading: this.props.loading,
    }
  }

  handleSearchInput(e) {
    this.setState({ search: e.target.value });
  }

  handleGetImage() {
    const { payload } = this.props;
    this.setState({ imagePokemon: payload.img.front_shiny });
  }

  render() {
    const { search, imagePokemon } = this.state;
    const { payload } = this.props;
    return (
      <div>
        <Header 
          titleBrand="Awesome Pokedex" 
          labelButton="Buscar"
          value={search}
          onClick={() => {
            this.props.searchPokemonForName(search);
            setTimeout(() => {
              this.handleGetImage();
            }, 1000);
          }} 
          onChange={(e) => this.handleSearchInput(e)}
          />
        <Card loading={payload.loading} pokemon={payload} srcImage={imagePokemon}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(Pokedex);