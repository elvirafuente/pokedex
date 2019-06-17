import React from 'react';
import PokemonList from '../PokemonList';
import Filter from '../Filter';
import './styles.scss';

function Main(props){
    const { data, handleInputName, inputName } = props;
    return (
        <main className="page__main">
            <Filter handleInputName={handleInputName} inputName={inputName}/>
            <PokemonList data={data} inputName={inputName}/>
        </main>
    )
}

export default Main;