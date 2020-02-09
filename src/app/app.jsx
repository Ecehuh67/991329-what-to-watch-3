import React from 'react';
import MainPage from '../main-page/main-page.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {title, genre, date} = props;

  return (
    <MainPage
      title={title}
      genre={genre}
      date={date}
    />
  );
};

export default App;
