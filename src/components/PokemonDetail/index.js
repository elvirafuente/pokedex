import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';


function PokemonDetail(props){
    const { pokemon } = props;
    return (
        <main className="page__main">
            <section className="main__detail">
                <h2>{pokemon.name}</h2>
                <div className="detail__image-container">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} className="detail__image" />
                    <img src={pokemon.sprites.back_default} alt={pokemon.name} className="detail__image" />
                </div>
                <div className="detail__info">
                    <p>Altura: {pokemon.height}</p>
                    <p>Peso: {pokemon.weight}</p>
                    <p>Experiencia: {pokemon.base__experience}</p>
                    <p>Índice de captura: {pokemon.capture_rate}</p>

                </div>
            </section>
            <Link className="pokemon-detail__back" to="/">
            Volver
            </Link> 
        </main>
    )
}

export default PokemonDetail;