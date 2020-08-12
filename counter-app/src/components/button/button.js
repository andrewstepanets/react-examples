import React, { Component } from 'react';


const Button = (props) =>  {
        return <button className={props.styleName}>+ {props.increment}</button>
}

export default Button;