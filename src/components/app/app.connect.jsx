import App from './app';
import {connect} from "react-redux";
import {Operation as DataOperation} from '../../reducer/data/data';
import {Operation as UserOperation} from '../../reducer/user/user';
import {ActionCreator} from '../../reducer/state/actions';
import {
  getUploadingState,
  // getPopupState,
  getSimilarFilms,
  getMovies,
  getActiveCard,
  getActiveFilmCard,
  getPromoFilm,
  getFavorites
} from '../../reducer/state/selectors';
import {getAuthorizationStatus} from '../../reducer/user/selectors';

// import {Api} from '../../api';

const mapStateToProps = (state) => {
  return {
    films: getMovies(state),
    favorites: getFavorites(state),
    promoFilm: getPromoFilm(state),
    isUploaded: getUploadingState(state),
    // isPopupActive: getPopupState(state),
    filteredFilms: getSimilarFilms(state),
    activeFilmCard: getActiveCard(state),
    authorizationStatus: getAuthorizationStatus(state),
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
  requireAuth() {
    dispatch(UserOperation.checkAuth());
  },
  login(authData) {
    dispatch(UserOperation.login(authData));
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
