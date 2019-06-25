import React, { Component, Fragment } from 'react';
import './styles.scss';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import fetchService from '../../services/fetchService';
import { Route, Switch } from 'react-router-dom';
import PokemonDetail from '../PokemonDetail';


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
    this.fetchPokemon();
    this.setState({
      isFetching:false,
    })
  }

  handleInputName(event) {
    const { value } = event.target;
    this.setState({
      inputName: value,
    })
  }

  getPokemon(detailId) {
    return this.state.data.find(item => item.id === parseInt(detailId))
  }

  fetchPokemon(){
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=25';
    fetchService(url)
      .then(data => {
        const { results } = data;
        for (let i = 0; i < results.length; i++) {
          fetchService(results[i].url)
            .then(dataSinglePoke => {
              const single = dataSinglePoke;
              fetchService(single.species.url)
                .then(dataEvolution => {
                  const pokeTotal = { ...single, ...dataEvolution }
                  this.setState(prevState => {
                    return {
                      data: [...prevState.data, pokeTotal]
                    }
                  })
                })
            
            })
        }
      })
  }
  



render() {
  const { data, inputName } = this.state
  return (
    <Fragment>
      <Header />
      {
        this.state.isFetching
          ? <p>loading...</p>
          : <Switch>
            <Route
              exact path="/"
              render={() => {
                return (
                  <Main
                    data={data}
                    handleInputName={this.handleInputName}
                    inputName={inputName}
                  />
                )
              }}
            />
            <Route
              path="/pokemon/:id"
              render={(routerProps) => {
                const routerId = routerProps.match.params.id;
                return (
                  <PokemonDetail
                    match={routerId}
                    pokemon={this.getPokemon(routerId)}
                  />
                )
              }}
            />
          </Switch>
      }
      <Footer />
    </Fragment>
  )
}
}

export default Page;
