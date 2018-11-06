import React from 'react';
import Log from '../components/Log';
import AppLogo from '../components/AppLogo';
import SearchBar from '../components/SearchBar';
import TmdbLogo from '../components/TmdbLogo';

const style = {
  textAlign: 'center',
  backgroundColor: 'black',
  color: 'white',
  height: '80px',
  display: 'flex',
  paddingLeft: '15px',
  paddingRight: '15px',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 'bold',
};

export default () => (
  <div style={style}>
    <AppLogo />
    <SearchBar />
    <Log />
    <TmdbLogo />
  </div>
);
