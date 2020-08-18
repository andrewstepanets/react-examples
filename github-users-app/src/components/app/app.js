import React, { useState } from 'react';
import CardList from '../card-list';
import Form from '../form';

const App = () => {
    const [ cards, setCards ] = useState([]);
    
    const addNewCard = cardInfo => {
        setCards(cards.concat(cardInfo))
    }

    const removeCard = key => {
        const removedCard = cards
            .slice(0, key)
            .concat(cards.slice(key + 1, key.length));
        setCards(removedCard);
    }

    return(
        <div>
            <Form onSubmit={addNewCard} />
            <CardList cards={cards} handleClick={removeCard}/>
        </div>
    );
};

export default App;