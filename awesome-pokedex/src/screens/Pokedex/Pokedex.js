import React, { Component } from 'react'
import { connect } from 'react-redux';
import Layout from '../../components/Layout/Layout';
import If from '../../utils/If/If';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';
import { Container } from '../../components/Utils/styleUtils';
import SpinnerIf from '../../components/SpinnerIf/SpinnerIf';

import * as actionCreators from '../../store/actions/getPokemon';

class Pokedex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      imagePokemon: null,
      loading: true,
      allPokemons: [],
    }
  }

  componentDidMount() {
    this.props.getAllPokemons();
    setTimeout(() => {
      this.setAllPokemons();
      this.setState({ loading: false })
    }, 500);
  }

  componentDidUpdate() {
    console.log(this.state.allPokemons)
  }
  
  setAllPokemons() {
    const { allPokemons } = this.state;
    const { pokemon } = this.props;
    allPokemons.push(pokemon.payload);
  }
  
  handleSearchInput(e) {
    this.setState({ search: e.target.value });
  }
  
  render() {
    const { loading, allPokemons } = this.state;

    return (
      <Container>
        <SpinnerIf show={loading} />
        <If show={!loading}>
          <Layout 
            title="AwesomePokedex"
            pokemons={allPokemons}
          />
        </If>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(Pokedex);