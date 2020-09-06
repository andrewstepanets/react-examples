import React from 'react';
import image from '../images/logo-01.svg';
import Collapsible from './Collapsible';

class App extends React.Component {


      state = {
              isLoading: true,
              contacts: []
            } 

  

      componentDidMount(){
          this.fetchData();

      }

  fetchData() {
    fetch('https://randomuser.me/api/?results=20&nat=us,dk,fr,gb')
      .then(response => response.json())
      .then(data => data.results.map(user => (
        {
          name: `${user.name.first} ${user.name.last}`,
          username: `${user.login.username}`,
          email: `${user.email}`,
          location: `${user.location.street.name} ${user.location.street.number}, ${user.location.city}`
        }
        )))
      .then(contacts =>
        this.setState({
          contacts,
          isLoading: false
        }))
      .then()
      .catch(error => console.log('parsing failed', error));
  }   



  render(){

    const { isLoading, contacts } = this.state;

    return (
      <div>
                  <header>
                    <img className="img-fluid" src={image} alt="Logo"/>
                    <h1 className="text-center">Collapsible and Fetch Content</h1>
                    <button 
                      className="btn btn-primary"
                      onClick={() => this.fetchData()}>
                      Fetch data
                    </button>
                  </header>
                  <div className={`content ${isLoading ? 'is-loading' : ''}`}>

                  {
                    !isLoading && contacts.length > 0 ? contacts.map(contact => {
                      const { username, name, email, location } = contact;
                      return (
                        <Collapsible key={username} title={name}>
                                  <p>
                                    {email} <br /> {location} 
                                  </p>
                                </Collapsible>
                              )
                    }) : null
                  }
                  </div>
                  <div className="loader">
                    <div className="icon">
                    </div>
                  </div>
      </div>
    )
}
}

export default App;
