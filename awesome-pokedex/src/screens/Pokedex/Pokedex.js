import React, { Component } from 'react'
import { connect } from 'react-redux';
import Nav from '../../components/Navbar/Navbar';
import Card from '../../components/Card/Card';
import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';
import { ContainerPokedex } from './PokedexStyle';

import * as actionCreators from '../../store/actions/index';

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      imagePokemon: null,
      loading: this.props.loading,
      allPokemons: [],
    }
    
  }

  componentWillMount() {
    this.props.getAllPokemons();
    this.handleGetPokemons();
  }

  handleSearchInput(e) {
    this.setState({ search: e.target.value });
  }

  handleGetImage() {
    const { payload } = this.props;
    this.setState({ imagePokemon: payload.img.front_default });
  }

  handleGetPokemons() {
    setTimeout(() => {
      this.setState({ allPokemons: this.props.payload.allPokemons});
    }, 1000);

    console.log(this.state.allPokemons);
  }


  render() {
    const { search, imagePokemon, allPokemons } = this.state;
    const { payload } = this.props;
    return (
      <ContainerPokedex fluid>
        <Nav 
          title="AwesomePokedex"
         />
        <Search 
          placeholder="search"
          value={search}
          onChange={(e) => this.handleSearchInput(e)}
          onClick={() => {
            this.props.searchPokemonForName(search);
            setTimeout(() => {
              this.handleGetImage();
            }, 1000);
          }} 
        />
        <CardList 
          pokemons={allPokemons}
        />
        <Card loading={payload.loading} pokemons={payload} srcImage={imagePokemon}/>
      </ContainerPokedex>
    )
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(Pokedex);