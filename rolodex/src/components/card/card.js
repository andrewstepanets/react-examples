import React from 'react';
import './card.scss';


function Card({ monster }) {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${monster.id}`} alt={monster.name} />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>

        </div>
    )
}

export default Card;