import React, { Component, Fragment } from 'react';
import './styles.scss';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import fetchService from '../../services/fetchService'

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isFetching: true,
      inputName: '',
    }
    this.handleInputName = this.handleInputName.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  handleInputName(event) {
    const { value } = event.target;
    this.setState({
      inputName: value,
    })
  }

  fetchApi() {
    const pokeData = fetchService();

    return (
      this.setState({
        data: pokeData,
        isFetching: false,
      })
    )
  }

  render() {
    const { data, inputName } = this.state
    return (
      <Fragment>
        <Header />
        {
          this.state.isFetching
            ? <p>loading...</p>
            : <Main data={data} handleInputName={this.handleInputName} inputName={inputName} />
        }
        <Footer />
      </Fragment>
    )
  }
}

export default Page;
