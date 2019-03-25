import React, { Component } from 'react'
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import GenerationCard from '../../components/GenerationCard/GenerationCard';
import SpinnerIf from '../../components/SpinnerIf/SpinnerIf';
import If from '../../utils/If/If';
import { Container } from '../../components/Utils/styleUtils';

import * as actionCreators from '../../store/actions/getGeneration';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      generations: [],
    }
  }

  componentDidMount() {
    this.props.showAllGeneration()
    setTimeout(() => {
      this.showAllGeneration()
      this.setState({ loading: false })
    }, 500);
  }

  showAllGeneration() {
    const { generations } = this.state;
    const { generation } = this.props;
    generations.push(generation.payload.generation);
  }
  
  render() {
    const { loading, generations } = this.state;

    return (
      <div>
        <Navbar title="AwesomePokedex" background="coral" />
        <Container container justify="center" alignItems="center">
        <SpinnerIf show={loading} />
          <If show={!loading}>
            <GenerationCard 
              generations={generations}
            />
          </If>
        <Footer />
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(Home);