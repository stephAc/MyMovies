import React from 'react';

const requestURL =
  'https://api.themoviedb.org/3/movie/550?api_key=22232165bd2420fd47b1eb7520ab231c';

var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var requestReply = request.response;
};
