import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from '../main-page/main-page';
import Popup from '../popup/popup';
import LoadScreen from '../load-screen/load-screen';
import {Operation as DataOperation} from '../../reducer/data/data';
import {ActionCreator} from '../../reducer/data/actions';
import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from './app.connect';
import withPopup from '../../hocs/with-popup/with-popup';
import {store} from '../../index';

const PopupWrapped = withPopup(Popup);

class App extends React.PureComponent {
  componentDidMount() {
    store.dispatch(DataOperation.loadFilms());
  }

  _renderApp() {
    // const {
    //   films,
    //   onFilmCardClick,
    //   isPopupActive,
    //   activeFilmCard,
    //   filteredFilms,
    //   onPlayButtonClick,
    //   onCloseButtonClick,
    //   videoPlayer
    // } = this.props;
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
        <MainPage
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
    // const {
    //   onFilmCardClick,
    //   activeFilmCard,
    //   filteredFilms,
    //   onPlayButtonClick,
    //   onCloseButtonClick,
    //   videoPlayer
    // } = this.props;
    const {
      films,
       isUploaded,
       onFilmCardClick,
       isPopupActive,
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
              // films={films}
              film={activeFilmCard}
              films={filteredFilms}
              onDataChange={onFilmCardClick}
              // onPlayButtonClick={onPlayButtonClick}
              // onCloseButtonClick={onCloseButtonClick}
              // videoPlayer={videoPlayer}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

// App.propTypes = {
//   films: PropTypes.arrayOf(
//       PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         image: PropTypes.string.isRequired,
//         preview: PropTypes.string.isRequired
//       })
//   ).isRequired,
//   onFilmCardClick: PropTypes.func.isRequired,
//   isPopupActive: PropTypes.bool.isRequired,
//   activeFilmCard: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     preview: PropTypes.string.isRequired,
//     genre: PropTypes.string.isRequired
//   }),
//   filteredFilms: PropTypes.arrayOf(
//       PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         image: PropTypes.string.isRequired,
//         preview: PropTypes.string.isRequired
//       })
//   ).isRequired,
//   onPlayButtonClick: PropTypes.func.isRequired,
//   onCloseButtonClick: PropTypes.func.isRequired,
//   videoPlayer: PropTypes.shape({
//     isPlaying: PropTypes.bool.isRequired
//   })
// };

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
