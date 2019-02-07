import React, { Component } from 'react';
import AppLogo from '../../components/AppLogo';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Header.css';
import './HeaderDropMenu.css';
import BtnHamburger from '../../components/BtnHamburger/BtnHamburger';
import { IoMdContact, IoIosSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';
import MyContext from '../../contexts/context';

export default class Header extends Component {
  dropMenu = () => {
    document.getElementById('myDropdown').classList.toggle('show');
  };

  render() {
    return (
      <nav className="headerStyle flexContainer">
        <AppLogo />
        <SearchBar />
        <ul className="flexContainer">
          <MyContext.Consumer>
            {context => (
              <React.Fragment>
                {context.state.log ? (
                  <React.Fragment>
                    {/* <li>
                      <p style={{ color: 'white' }}>{context.state.name}</p>
                    </li>
                    <li>
                      <button onClick={() => context.logOut(false)}>
                        logOut
                      </button>
                    </li> */}

                    <li>
                      <div className="dropdown">
                        <button onClick={this.dropMenu} className="dropbtn">
                          <span>{context.state.name}</span>
                          <br />
                          <IoMdContact className="iconAvatarLog" />
                        </button>
                        <div id="myDropdown" className="dropdown-content">
                          <button
                            className="subBtnMenu"
                            onClick={() => context.logOut(false)}
                          >
                            logOut
                          </button>
                          {/* <a href="#about">About</a>
                          <a href="#contact">Contact</a> */}
                        </div>
                      </div>
                    </li>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <li>
                      <button className="btnStyle" onClick={handleConnexion}>
                        Connexion
                      </button>
                    </li>
                    <li>
                      <Link to={`/film/search`}>
                        <IoIosSearch className="iconAvatar" />
                      </Link>
                    </li>
                    <li>
                      <Link to={`/login`}>
                        <IoMdContact className="iconAvatar" />
                      </Link>
                    </li>
                  </React.Fragment>
                )}
              </React.Fragment>
            )}
          </MyContext.Consumer>

          <li>
            <BtnHamburger />
          </li>
        </ul>
      </nav>
    );
  }
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

function handleConnexion() {
  var popLog = document.getElementById('logForm');

  if (document.location.href !== 'http://localhost:3000/film/login') {
    popLog.style.display =
      popLog.style.display === 'none' || popLog.style.display === ''
        ? 'block'
        : 'none';
  }
}
