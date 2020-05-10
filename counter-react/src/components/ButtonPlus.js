import React from 'react';


const ButtonPlus = ({ increment, onClickFunction }) => {

    const handleClick = () => {
        onClickFunction(increment);
    }
return <button onClick={handleClick}>+{increment}</button>
}


export default ButtonPlus;

