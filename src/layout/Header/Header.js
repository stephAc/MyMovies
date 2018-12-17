import React from 'react';
import AppLogo from '../../components/AppLogo';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Header.css';
import BtnHamburger from '../../components/BtnHamburger/BtnHamburger';

export default () => (
  <nav className="headerStyle">
    <ul className="flexContainer">
      <li>
        <AppLogo />
      </li>
      <li>
        <SearchBar />
      </li>
      <li>
        <button className="btnStyle" onClick={handleConnexion}>
          Connexion
        </button>
      </li>
      <li>
        <BtnHamburger />
      </li>
    </ul>
  </nav>
);

function handleConnexion() {
  var popLog = document.getElementById('logForm');

  popLog.style.display =
    popLog.style.display === 'none' || popLog.style.display === ''
      ? 'block'
      : 'none';
}
