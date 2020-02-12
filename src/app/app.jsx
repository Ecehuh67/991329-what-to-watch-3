import MainPage from '../main-page/main-page';
import React from 'react';
import PropTypes from 'prop-types';

const titleButtonHandler = () => {};

const App = (props) => {

  const {films} = props;

  return (
    <MainPage
      films={films}
      onTitleButtonHandler={titleButtonHandler}
    />
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default App;
