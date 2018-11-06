import React from 'react';
import GridFilm from '../components/GridFilm';
import ReturnTopPage from '../components/ReturnTopPage';

export default () => {
  window.onscroll = () => {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      document.getElementById('returnTopBtn').style.display = 'block';
    } else {
      document.getElementById('returnTopBtn').style.display = 'none';
    }
  };

  return (
    <div>
      <GridFilm />
      <ReturnTopPage />
    </div>
  );
};
