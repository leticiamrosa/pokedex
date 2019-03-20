import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ButtonSearch } from '../../components/Buttons/Button';
import { ContainerPokedex } from './HomeStyle';
import * as actionCreators from '../../store/actions/index';

import Nav from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newText: 'pikachu',
    }
    console.log(props)
  }

  addNewText() {
    // const { addItems,  searchPokemon } = this.props;
    // const { newText } = this.state;
    // addItems(newText);
    // console.log(searchPokemon(newText))
    // console.log( addItems(newText))
    // // this.setState({ newText: ''});
  }

  inputChange(e) {
    // const { newText } = this.state;
    this.setState({ newText: e.target.value })
  }
  
  render() {
    return (
      <ContainerPokedex className="d-flex justify-content-center align-items-center">
        <Header />
        <Link to="/pokedex">
          <ButtonSearch  backgroundcolor="green" color="white"> Pokedex</ButtonSearch>
        </Link>
      </ContainerPokedex>
    )
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(Home);

