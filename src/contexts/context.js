import React, { Component } from 'react';

//Context
const MyContext = React.createContext();

//Context provider, where the data lives
export class MyProvider extends Component {
  state = {
    name: 'Steph',
    log: false,
  };

  logIn = log => {
    this.setState({
      log,
    });
  };
  logOut = log => {
    this.setState({
      log,
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          logIn: this.logIn,
          logOut: this.logOut,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyContext;
