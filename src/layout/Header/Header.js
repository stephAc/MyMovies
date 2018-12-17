import React from 'react';
import AppLogo from '../../components/AppLogo';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Header.css';
import BtnHamburger from '../../components/BtnHamburger/BtnHamburger';

export default () => (
  <div className="headerStyle">
    <AppLogo />
    <SearchBar />
    <button className="btnStyle" onClick={handleConnexion}>
      Connexion
    </button>
    <BtnHamburger />
  </div>
);

function handleConnexion() {
  var popLog = document.getElementById('logForm');

  popLog.style.display =
    popLog.style.display === 'none' || popLog.style.display === ''
      ? 'block'
      : 'none';
}
