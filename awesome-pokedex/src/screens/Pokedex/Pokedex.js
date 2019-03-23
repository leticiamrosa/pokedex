import React, { Component } from 'react'
import { connect } from 'react-redux';
import MaterialCard from '../../components/MaterialCard/MaterialCard';
import Layout from '../../components/Layout/Layout';
import If from '../../utils/If/If';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';

import * as actionCreators from '../../store/actions/getPokemon';

class Pokedex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
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
    const { pokemon } = this.props;

    return (
      <div>
        <If show={loading}>
        <Grid style={{ flexGrow: 1 }}container justify="center" alignItems="center">
          <CircularProgress aria-describedby color="secondary"/>
        </Grid>
        </If>
        <If show={!loading}>
          <Layout 
            title="AwesomePokedex"
            pokemons={allPokemons}
          />
        </If>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(Pokedex);