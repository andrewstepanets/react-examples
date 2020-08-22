import React from 'react';
import Canvas from './Canvas';
import ColorPicker from './ColorPicker';

const App = () => {
    return(
        <div className="app">
            <ColorPicker />
            <Canvas />
        </div>
    )
}

export default App;