import React from 'react';
import PokemonCard from '../PokemonCard';
import './styles.scss';

function PokemonList (props){
    const { data, inputName } = props;
    return (
        <ul className="main__list">
            {data
            .filter( item => !inputName ? item : item.name.toLowerCase().includes(inputName.toLowerCase()))
            .map(item => {
                return (
                    <PokemonCard item={item} key={item.id} />
                )
            })}
        </ul>
    )
    
}

export default PokemonList;