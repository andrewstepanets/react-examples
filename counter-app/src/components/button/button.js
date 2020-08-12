import React from 'react';
import './button.css'


const Button = ({ styleName, symbol, value, onClickFunction }) =>  {
    const handleClick = () => {
        onClickFunction(value)
    }
        return (
            <button 
                className={styleName}
                onClick={handleClick}>{symbol} {value}</button>)
}

export default Button;