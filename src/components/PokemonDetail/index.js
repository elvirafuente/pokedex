import React from 'react';
import './styles.scss';


function PokemonDetail(props){
    const { pokemon } = props;
    return (
        <main className="page__main">
            <section className="main__detail">
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className="detail__image" />
            </section>
        </main>
    )
}

export default PokemonDetail;