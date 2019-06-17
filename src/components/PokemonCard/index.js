import React from 'react';
import './styles.scss';

function PokemonCard(props) {
    const { item } = props;
    return (
        <li key={item.id} className="list__item">
            <h2>{item.name}</h2>
            <img src={item.sprites.front_default} alt={item.name} />
            <p>{`ID: ${item.id}`}</p>
            {item.types.map((singleType, index) => {
                return (
                    <p key={index}>{singleType.type.name}</p>
                )
            })}
        </li>
    )
}

export default PokemonCard;