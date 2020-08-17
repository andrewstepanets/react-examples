import React, { useState } from 'react';
import CardList from '../card-list';
import Form from '../form';

const App = () => {
    const [ cards, setCards ] = useState([]);
    
    const addNewCard = cardInfo => {
        setCards(cards.concat(cardInfo))
    }

    return(
        <div>
            <Form onSubmit={addNewCard} />
            <CardList cards={cards} />
        </div>
    );
};

export default App;