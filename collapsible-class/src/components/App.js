import React from 'react';
import image from '../images/logo-01.svg';
import Collapsible from './Collapsible';

class App extends React.Component {
  render(){
    return (
      <div>
        <header>
          <img className="img-fluid" src={image} />
          <h1>Collapsible Content</h1>
        </header>
        <div className="content">
          <Collapsible title="Overview">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, expedita?
            </p>
          </Collapsible>
          <Collapsible title="Features">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat debitis facilis tenetur consequuntur unde deleniti repellat earum ipsa dolore adipisci!
            </p>
          </Collapsible>
          <Collapsible title="Reviews">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis nulla culpa dolor adipisci! Consequatur, beatae?
            </p>
          </Collapsible>
        </div>
      </div>
    );
  }
  
}

export default App;
