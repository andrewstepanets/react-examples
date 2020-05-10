import React from 'react';

const ButtonMinus = ({ decrement, onClickFunction }) => {

    const handleClick = () => {
        onClickFunction(decrement);
    }
    return <button onClick={handleClick}>-{decrement}</button>
}

export default ButtonMinus;