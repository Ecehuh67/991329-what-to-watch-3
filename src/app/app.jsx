import React from 'react';
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
  films: PropTypes.arrayOf(
    Proptypes.string
  )
};

export default App;
