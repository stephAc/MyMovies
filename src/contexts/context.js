import React, { Component } from 'react';

//Context
const MyContext = React.createContext();

//Context provider, where the data lives
export class MyProvider extends Component {
  state = {
    name: '',
    log: false,
    idUser:'',
  };

  componentDidMount() {
    let name = localStorage.getItem('name');
    let idUser = localStorage.getItem('idUser');
    this.setState(() => ({
      name,
      idUser,
    }));

    if (name === null) {
      this.setState(() => ({
        log: false,
      }));
    } else {
      this.setState(() => ({
        log: true,
      }));
    }
  }

  logIn = log => {
    this.setState({
      log,
    });
  };
  logOut = log => {
    this.setState({
      log,
      name: '',
      idUser:'',
    });
    localStorage.clear();
    window.location.replace('http://localhost:3000/');
  };

  connexion = event => {
    event.preventDefault();

    const FORM_DATA = new FormData(event.target);
    let jsonObject = {};
    for (const [key, value] of FORM_DATA.entries()) {
      jsonObject[key] = value;
    }

    fetch('http://localhost:4000/login', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(jsonObject),
    })
      .then(result => result.json())
      .then(result => {
        console.log(result);
        localStorage.setItem('name', result.name);
        localStorage.setItem('idUser', result._id);
        window.location.replace('http://localhost:3000/');
      })
      .catch(err => console.log('fetch error ' + err.message));
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          logIn: this.logIn,
          logOut: this.logOut,
          connexion: this.connexion,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyContext;
