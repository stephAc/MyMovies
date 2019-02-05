import React, { Component } from 'react';
import { Header, Body, Footer } from '../layout';
import { MyProvider } from '../contexts/context';
import './App.css';

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <Header />
          <Body />
          <Footer />
        </div>
      </MyProvider>
    );
  }
}

export default App;
