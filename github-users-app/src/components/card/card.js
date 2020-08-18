import React from 'react';


const Card = props => {
    return(
        <div style={{ margin: '1rem' }}>
            <img src={props.avatar_url} alt="Avatar" style={{ width: '70px' }}/>
            <div>
                <div style={{ fontWeight: 'bold' }}>{props.name}</div>
                <div>{props.blog}</div>
                <button onClick={props.handleClick} className="btn btn-danger">Remove</button>
            </div>
        </div>
    );
};

export default Card;