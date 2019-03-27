import React, { Component } from 'react'
import { connect } from 'react-redux';
import Layout from '../../components/Layout/Layout';
import If from '../../utils/If/If';
import { Container } from '../../components/Utils/styleUtils';
import SpinnerIf from '../../components/SpinnerIf/SpinnerIf';

import * as actionCreators from '../../store/actions/getPokemon';

class Pokedex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      imagePokemon: null,
      allPokemons: [],
      activePage: 1,
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
    console.log(this.props.match.params.limit)
  }
  
  setAllPokemons() {
    const { allPokemons } = this.state;
    const { pokemon } = this.props;
    allPokemons.push(pokemon.payload);
  }
  
  handleSearchInput(e) {
    this.setState({ search: e.target.value });
  }

  handlePageChange(limit) {
    this.props.pokemonPagination(10)
  }
  
  render() {
    const { loading, allPokemons } = this.state;
    const { activePage } = this.state;
    
    return (
      <Container>
        <SpinnerIf show={loading} />
        <If show={!loading}>
          <Layout 
            title="AwesomePokedex"
            pokemons={allPokemons}
            activePage={activePage}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            onChange={() => this.handlePageChange()}
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