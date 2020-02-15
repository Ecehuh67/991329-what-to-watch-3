import MainPage from '../main-page/main-page';

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
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
      })
  ).isRequired
};

export default App;
