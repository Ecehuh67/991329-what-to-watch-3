// import App from './app';
// import {connect} from "react-redux";
import {Operation as DataOperation} from '../../reducer/data/data';
import {Operation as UserOperation} from '../../reducer/user/user';
import {ActionCreator} from '../../reducer/state/actions';
import {
  getUploadingState,
  getPopupState,
  getSimilarFilms,
  getMovies,
  getActiveCard
} from '../../reducer/state/selectors';
import {getAuthorizationStatus} from '../../reducer/user/selectors';

const mapStateToProps = (state) => {
  return {
    films: getMovies(state),
    isUploaded: getUploadingState(state),
    isPopupActive: getPopupState(state),
    filteredFilms: getSimilarFilms(state),
    activeFilmCard: getActiveCard(state),
    authorizationStatus: getAuthorizationStatus(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFilmCardClick(id) {
    dispatch(ActionCreator.setActiveFilm(id));
  },
  loadFilms() {
    dispatch(DataOperation.loadFilms());
  },
  requireAuth() {
    dispatch(UserOperation.checkAuth());
  },
  login(authData) {
    dispatch(UserOperation.login(authData));
  }
});

export {mapStateToProps, mapDispatchToProps};
// export default connect(mapStateToProps, mapDispatchToProps)(App);
