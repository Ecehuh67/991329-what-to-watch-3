import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from '../main-page/main-page';
import Popup from '../popup/popup';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {getSimilarFilms} from '../../utils/utils';
import {DEFAULT_GENRE} from '../../utils/consts';

class App extends React.PureComponent {
  _renderApp() {
    const {
      films,
      onFilmCardClick,
      isPopupActive,
      activeFilmCard,
      filteredFilms
    } = this.props;

    if (!isPopupActive) {
      return (
        <MainPage
          films={films}
          onDataChange={onFilmCardClick}
        />
      );
    }

    return (
      <Popup
        film={activeFilmCard}
        films={filteredFilms}
        onDataChange={onFilmCardClick}
      />
    );
  }

  render() {
    const {
      onFilmCardClick,
      activeFilmCard,
      filteredFilms
    } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/popup">
            <Popup
              film={activeFilmCard}
              films={filteredFilms}
              onDataChange={onFilmCardClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired
      })
  ).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  isPopupActive: PropTypes.bool.isRequired,
  activeFilmCard: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired
  }),
  filteredFilms: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired
      })
  ).isRequired,
};

const mapStateToProps = (state) => {
  return {
    isPopupActive: state.isPopupActive,
    activeFilmCard: state.activeFilmCard,
    filteredFilms: getSimilarFilms(state.films, state.activeFilmCard),
    films: (() => {
      if (state.chosenGenre === DEFAULT_GENRE) {
        return state.films.slice(0, state.showedFilms);
      }
      return state.films.slice().filter((film) => film.genre === state.chosenGenre);
    })(),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFilmCardClick(genre) {
    dispatch(ActionCreator.setActiveFIlmGenre(genre));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
