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
      generation: this.props.location.state.limit,
      offSet: 0,
      limit: 0,
    }
  }

  componentWillMount() {
    const { generation } = this.state;
    this.whichGenerationShows(generation);
  }

  componentDidMount() {
    const { limit, offSet } = this.state;
    this.props.getAllPokemons(offSet, limit);
    setTimeout(() => {
      this.setAllPokemons();
      this.setState({ loading: false })
    }, 1000);
  }

  componentDidUpdate() {
    // console.log(this.state.limit)
  }
  
  setAllPokemons() {
    const { allPokemons } = this.state;
    const { pokemon } = this.props;
    allPokemons.push(pokemon.payload);
  }
  
  handleSearchInput(e) {
    this.setState({ search: e.target.value });
  }

  whichGenerationShows(generation) {
    switch (generation) {
      case 'Geração I':
      this.setState({ offSet: 0, limit: 151 });
      break;
      case 'Geração II':
      this.setState({ offSet: 151, limit: 251 });
      break;
      case 'Geração III':
      this.setState({ offSet: 251, limit: 351 });
      break;
      case 'Geração IV':
      this.setState({ offSet: 351, limit: 451 });
      break;
      case 'Geração V':
      this.setState({ offSet: 451, limit: 551 });
      break;
      case 'Geração VI':
      this.setState({ offSet: 551, limit: 651 });
      break;
      default:
      this.setState({ offSet: 252, limit: 351 });
    }
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