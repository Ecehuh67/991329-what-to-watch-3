import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page.jsx';

const App = (props) => {

  const {films} = props;

  return (
    <MainPage
      films={films}
    />
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default App;
