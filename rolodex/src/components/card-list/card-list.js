import React from 'react';
import './card-list.css';

function CardList({ children }) {
    return (
        <div className="card-list">
            { children}
        </div>
    )
}

export default CardList;