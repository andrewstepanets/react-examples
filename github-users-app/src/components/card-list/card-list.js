import React from 'react';
import Card from '../card'

const CardList = props => (
        <div>
            {props.cards.map((card, index) => (
                <Card 
                    {...card}
                    key={index}
                    handleClick={() => props.handleClick(index)} />
            ))}
        </div>
);
        

export default CardList;