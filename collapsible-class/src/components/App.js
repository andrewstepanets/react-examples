import React from 'react';
import image from '../images/logo-01.svg';

class App extends React.Component {
  render(){
    return (
      <div>
        <header>
          <img src={image} />
          <h1>Collapsible Content</h1>
        </header>
        <div className="content">
          <div className="card">
            <div className="card-header">
              <h2>Overview</h2>
            </div>
            <div className="card-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, expedita?
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h2>Features</h2>
            </div>
            <div className="card-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, expedita?
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h2>Reviews</h2>
            </div>
            <div className="card-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, expedita?
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
