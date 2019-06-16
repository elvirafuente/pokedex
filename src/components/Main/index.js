import React, { Component } from 'react';
import './styles.scss';
import PokemonList from '../PokemonList'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isFetching: true,
    }
  }

  componentDidMount(){
    this.fetchService();
  }

  fetchService(){
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=25';
    return (
      fetch(url)
      .then(response => response.json())
      .then(data => {
        const { results } = data;
        for(let i = 0; i < results.length; i++){
          fetch(results[i].url)
          .then(responseSinglePoke => responseSinglePoke.json())
          .then(dataSinglePoke => {
            console.log(dataSinglePoke);
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
    return (
      <main>
        {
          this.state.isFetching 
          ? <p>loading...</p>
          : <PokemonList />
        }
      </main>
    )
  }
}

export default Main;
