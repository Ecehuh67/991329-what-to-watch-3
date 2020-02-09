import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app.jsx';

const DetailInformation = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  DATE: `2014`
};

ReactDOM.render(
    <App
      title={DetailInformation.TITLE}
      genre={DetailInformation.GENRE}
      date={DetailInformation.DATE}
    />,
    document.querySelector(`#root`)
);
