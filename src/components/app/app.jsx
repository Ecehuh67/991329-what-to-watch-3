import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from '../main-page/main-page';
import Popup from '../popup/popup';
import LoadScreen from '../load-screen/load-screen';
import {Operation as DataOperation} from '../../reducer/data/data';
import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from './app.connect';
import withPopup from '../../hocs/with-popup/with-popup';
import withMainPage from '../../hocs/with-main-page/with-main-page';
import {store} from '../../index';

const PopupWrapped = withPopup(Popup);
const MainPageWrapped = withMainPage(MainPage);

class App extends React.PureComponent {
  componentDidMount() {
    store.dispatch(DataOperation.loadFilms());
  }

  _renderApp() {
    const {
      films,
      isUploaded,
      onFilmCardClick,
      isPopupActive,
      activeFilmCard,
      filteredFilms
    } = this.props;

    if (!isUploaded) {
      return (
        <LoadScreen
        />
      );
    }

    if (isUploaded && !isPopupActive) {
      return (
        <MainPageWrapped
          films={films}
          onDataChange={onFilmCardClick}
        />
      );
    }

    return (
      <PopupWrapped
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
            <PopupWrapped
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

/* eslint camelcase: ["error", {properties: "never"}] */
App.propTypes = {
  isUploaded: PropTypes.bool.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        poster_image: PropTypes.string.isRequired,
        preview_image: PropTypes.string.isRequired,
        background_image: PropTypes.string.isRequired,
        background_color: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        scores_count: PropTypes.number.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.arrayOf(PropTypes.string.isRequired),
        run_time: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
        released: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        is_favorite: PropTypes.bool.isRequired,
        video_link: PropTypes.string.isRequired,
        preview_video_link: PropTypes.string.isRequired,
      })
  ).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  isPopupActive: PropTypes.bool.isRequired,
  activeFilmCard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    poster_image: PropTypes.string.isRequired,
    preview_image: PropTypes.string.isRequired,
    background_image: PropTypes.string.isRequired,
    background_color: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scores_count: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string.isRequired),
    run_time: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    is_favorite: PropTypes.bool.isRequired,
    video_link: PropTypes.string.isRequired,
    preview_video_link: PropTypes.string.isRequired,
  }).isRequired,
  filteredFilms: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        poster_image: PropTypes.string.isRequired,
        preview_image: PropTypes.string.isRequired,
        background_image: PropTypes.string.isRequired,
        background_color: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        scores_count: PropTypes.number.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.arrayOf(PropTypes.string.isRequired),
        run_time: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
        released: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        is_favorite: PropTypes.bool.isRequired,
        video_link: PropTypes.string.isRequired,
        preview_video_link: PropTypes.string.isRequired,
      })
  ).isRequired,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
