import React, { Component } from 'react'
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
// import Nav from '../../components/Navbar/Navbar';
// import Card from '../../components/Card/Card';
// import Search from '../../components/Search/Search';
// import CardList from '../../components/CardList/CardList';
// import { ContainerPokedex } from './PokedexStyle';
import MaterialCard from '../../components/MaterialCard/MaterialCard';
import Layout from '../../components/Layout/Layout';

import * as actionCreators from '../../store/actions/search';

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      imagePokemon: null,
      loading: true,
      allPokemons: [],
    }    
  }

  componentWillMount() {
    this.props.getAllPokemons();
    console.log(this.props.payload)
  }
  componentDidUpdate() {
  }
  
  showAllPokemons() {
    console.log(this.props.payload.pokemon)
    
  }
  
  handleSearchInput(e) {
    this.setState({ search: e.target.value });
  }
  
  render() {
    const { payload } = this.props;
    console.log(this.props.payload)
    return (
      <Layout 
        
      />
    )
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(Pokedex);