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
    this.callbackFetch = this.callbackFetch.bind(this);
  }



  callbackFetch(){
    this.setState({
      isFetching:false,
    })
  }

  fetchPokemon(callback){
    const data = fetchService();
    this.setState({
      data: data,
    });
    callback();
  }
  componentDidMount() {
    this.fetchPokemon(this.callbackFetch)
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
