import React from 'react';
import Pixel from './Pixel';
import Colors from '../Colors';

export default props => {
    return (
        <div className="colorpicker">
            {Colors.map((color, index) => {
                return <Pixel key={index} background={color} />
            })}
        </div>
    )
}