import React from 'react'

function PokemonList (props){
    const { data } = props;
    return (
        <ul>
            {data.map(item => {
                return (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <img src={item.sprites.front_default} alt={item.name}/>
                        <p>{`ID: ${item.id}`}</p>
                        {item.types.map(singleType => {
                            return (
                                <p>{singleType.type.name}</p>
                            )
                        })}
                    </li>
                )
            })}
        </ul>
    )
    
}

export default PokemonList;