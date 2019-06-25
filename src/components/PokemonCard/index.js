import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';



function PokemonCard(props) {
    const { item } = props;
    return (
        <Link to={`/pokemon/${item.id}`} className="card__link">
            <li key={item.id} className="list__item">
                <h2>{item.name}</h2>
                <img src={item.sprites.front_default} alt={item.name} />
                <p>{`ID: ${item.id}`}</p>
                <ul className="item__type-list">
                {item.types.map((singleType, index) => {
                    return (
                            <li className="item__type" key={index}>{singleType.type.name}</li>
                    )
                })}
                </ul>
                {item.evolves_from_species ? <p>Evoluciona de: {item.evolves_from_species.name}</p> : ''}
                
            </li>
        </Link>

    )
}

export default PokemonCard;