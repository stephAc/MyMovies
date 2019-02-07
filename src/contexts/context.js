import React, { Component } from 'react';

//Context
const MyContext = React.createContext();

//Context provider, where the data lives
export class MyProvider extends Component {
  state = {
    name: '',
    log: false,
  };

  componentDidMount() {
    let name = localStorage.getItem('name');
    this.setState(() => ({
      name,
    }));
    if (!this.state.log) {
      this.setState(() => ({
        log: true,
      }));
    } else {
      this.setState(() => ({
        log: false,
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
    });
    localStorage.clear();
  };
  connexion = event => {
    event.preventDefault();
    if (!this.state.log) {
      this.setState(() => ({
        log: true,
      }));
    } else {
      this.setState(() => ({
        log: false,
      }));
    }

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
        this.setState(() => ({
          name: result.name,
        }));
        console.log(this.state.name);
        localStorage.setItem('name', result.name);
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
