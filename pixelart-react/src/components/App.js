import React, { useState } from 'react';
import Canvas from './Canvas';
import ColorPicker from './ColorPicker';

const App = () => {

    const [color, setColor] = useState(0);
    return(
        <div className="app">
            <ColorPicker 
                currentColor={color}
                setColor={color => setColor(color)}
                />
            <Canvas />
        </div>
    )
}

export default App;