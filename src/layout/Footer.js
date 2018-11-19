import React from 'react';
import TmdbLogo from '../components/TmdbLogo';

const style = {
  width: '100%',
  textAlign: 'center',
  backgroundColor: 'black',
  color: 'white',
  position: 'fixed',
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.3)',
  padding: '5px',
};

export default () => (
  <div style={style}>
    <TmdbLogo />
    v1.0.0 © Stéphane ACHARI
  </div>
);
