import React from 'react';
import Card from 'components/card/card'
import './card-list.scss';

function CardList({ monsters }) {
    return (
        <div className="card-list">
            {monsters.map(monster => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    )
}

export default CardList;