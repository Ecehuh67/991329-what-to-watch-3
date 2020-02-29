import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import MainPage from '../main-page/main-page';
import Popup from '../popup/popup';
import {mapStateToProps, mapDispatchToProps} from './app.connect';
import withPopup from '../../hocs/with-popup/with-popup';

const PopupWrapped = withPopup(Popup);

class App extends React.PureComponent {
  _renderApp() {
    const {
      films,
      onFilmCardClick,
      isPopupActive,
      activeFilmCard,
      filteredFilms,
      onPlayButtonClick,
      onCloseButtonClick,
      videoPlayer
    } = this.props;

    if (!isPopupActive) {
      return (
        <MainPage
          films={films}
          onDataChange={onFilmCardClick}
          onPlayButtonClick={onPlayButtonClick}
          onCloseButtonClick={onCloseButtonClick}
          videoPlayer={videoPlayer}
        />
      );
    }

    return (
      <PopupWrapped
        film={activeFilmCard}
        films={filteredFilms}
        onDataChange={onFilmCardClick}
        onPlayButtonClick={onPlayButtonClick}
        onCloseButtonClick={onCloseButtonClick}
        videoPlayer={videoPlayer}
      />
    );
  }

  render() {
    const {
      onFilmCardClick,
      activeFilmCard,
      filteredFilms,
      onPlayButtonClick,
      onCloseButtonClick,
      videoPlayer
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
              onPlayButtonClick={onPlayButtonClick}
              onCloseButtonClick={onCloseButtonClick}
              videoPlayer={videoPlayer}
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
  onPlayButtonClick: PropTypes.func.isRequired,
  onCloseButtonClick: PropTypes.func.isRequired,
  videoPlayer: PropTypes.shape({
    isPlaying: PropTypes.bool.isRequired
  })
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
