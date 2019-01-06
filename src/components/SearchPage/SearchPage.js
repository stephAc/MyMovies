import React, { Component } from 'react';
import { API_URL, API_KEY } from '../DataConfig';
import BtnSlideBar from '../BtnSlideBar/BtnSlideBar';
import './SearchPage.css';
import { IoIosSearch } from 'react-icons/io';

export default class SearchPage extends Component {
  state = {
    searchField: '',
    srchInput: [],
  };

  handleEntree = event => {
    if (this.state.searchField !== '') {
      if (event.key === 'Enter' || event.type === 'click') {
        this.props.history.push(`/film/research/${this.state.searchField}`);
        this.setState({ searchField: '' });
      }
    }
  };

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({ searchField: value });
    if (value.length >= 1) {
      this.getMoviePopular(value);
    }
  };

  getMoviePopular = searchField => {
    let inputRequest = `${API_URL}search/movie${API_KEY}&query=${searchField}&page=1&include_adult=false`;

    fetch(inputRequest)
      .then(result => result.json())
      .then(result => {
        console.log(result);
        this.putInFormInfo(result.results);
      });
  };

  putInFormInfo = list => {
    // Récupère la liste des titre
    this.setState({
      srchInput: list.map(elt => {
        return elt.title;
      }),
    });
    console.log(this.state.srchInput);
  };

  render() {
    return (
      <React.Fragment>
        <BtnSlideBar />
        <div className="containerSearch">
          <input
            type="text"
            placeholder="Search..."
            className="inputSearchStyle"
            value={this.state.searchField}
            onChange={this.handleInputChange}
            onKeyPress={this.handleEntree}
            list="srchInputList"
            name="srchInputList"
          />
          {this.state.srchInput.length > 0 ? (
            <datalist id="srchInputList">
              {this.state.srchInput.map((item, index) => {
                return <option key={index} value={item} />;
              })}
            </datalist>
          ) : (
            ''
          )}

          <button
            id="btnReSearch"
            className="buttonSearchStyle"
            onClick={this.handleEntree}
          >
            <IoIosSearch className="iconSearch" />
          </button>
        </div>
      </React.Fragment>
    );
  }
}
