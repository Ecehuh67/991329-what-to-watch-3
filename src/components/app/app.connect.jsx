import App from './app';
import {connect} from "react-redux";
import {Operations as DataOperations} from '../../reducer/data/data';
import {Operations as UserOperations} from '../../reducer/user/user';
import {ActionCreator} from '../../reducer/state/actions';
import {
  getUploadingState,
  getSimilarFilms,
  getMovies,
  getActiveCard,
  getActiveFilmCard,
  getPromoFilm,
  getFavorites
} from '../../reducer/state/selectors';
import {getAuthorizationStatus, getAvatar} from '../../reducer/user/selectors';

const mapStateToProps = (state) => {
  return {
    films: getMovies(state),
    favorites: getFavorites(state),
    promoFilm: getPromoFilm(state),
    isUploaded: getUploadingState(state),
    filteredFilms: getSimilarFilms(state),
    activeFilmCard: getActiveCard(state),
    authorizationStatus: getAuthorizationStatus(state),
    userAvatar: getAvatar(state),
    currentCardId: getActiveFilmCard(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFilmCardClick(id) {
    dispatch(ActionCreator.setActiveFilm(id));
  },
  loadFilms() {
    dispatch(DataOperations.loadFilms());
  },
  loadPromoFilm() {
    dispatch(DataOperations.loadPromoFilm());
  },
  loadComments(id) {
    dispatch(DataOperations.loadComments(id));
  },
  requireAuth(handler) {
    dispatch(UserOperations.checkAuth(handler));
  },
  login(authData, favHandler, filmsHandler, promoHandler) {
    dispatch(UserOperations.login(authData, favHandler, filmsHandler, promoHandler));
  },
  postComment(commentData) {
    dispatch(DataOperations.postComment(commentData));
  },
  loadFavorites() {
    dispatch(DataOperations.loadFavorites());
  },
  addToFavorite(favData) {
    dispatch(DataOperations.addToFavorite(favData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
