import React, { Component,Fragment } from 'react';
import './styles.scss';
import Header from '../Header';
import Main from '../Main';
import fetchService from '../../services/fetchService'

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isFetching: true,
      inputName:'',
    }
    this.handleInputName = this.handleInputName.bind(this);
  }

  componentDidMount(){
    this.fetchApi();
  }

  handleInputName(event){
    const { value } = event.target;
    this.setState({
      inputName: value,
    })
  }

  fetchApi(){
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=25';
    return (
      fetchService(url)
      .then(data => {
        const { results } = data;
        for(let i = 0; i < results.length; i++){
          fetchService(results[i].url)
          .then(dataSinglePoke => {
            this.setState(prevState => {
              return {
                data: [
                  ...prevState.data,
                  dataSinglePoke
                ]
              }
            })
          })
        }
        this.setState({
          isFetching: false,
        })
      })      
    )
  }

  render(){
    const { data, inputName } = this.state
    return (
      <Fragment>
        <Header />
        {
          this.state.isFetching 
          ? <p>loading...</p>
          : <Main data={data} handleInputName={this.handleInputName} inputName={inputName}/>
        }
      </Fragment>
    )
  }
}

export default Page;
