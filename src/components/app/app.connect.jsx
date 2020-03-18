import App from './app';
import {connect} from "react-redux";
import {Operation as DataOperation} from '../../reducer/data/data';
import {Operation as UserOperation} from '../../reducer/user/user';
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
    dispatch(DataOperation.loadFilms());
  },
  loadPromoFilm() {
    dispatch(DataOperation.loadPromoFilm());
  },
  loadComments(id) {
    dispatch(DataOperation.loadComments(id));
  },
  requireAuth(handler) {
    dispatch(UserOperation.checkAuth(handler));
  },
  login(authData, favHandler, filmsHandler, promoHandler) {
    dispatch(UserOperation.login(authData, favHandler, filmsHandler, promoHandler));
  },
  postComment(commentData) {
    dispatch(DataOperation.postComment(commentData));
  },
  loadFavorites() {
    dispatch(DataOperation.loadFavorites());
  },
  addToFavorite(favData) {
    dispatch(DataOperation.addToFavorite(favData))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
