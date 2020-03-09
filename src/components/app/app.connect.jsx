// import App from './app';
// import {connect} from "react-redux";
import {Operation as DataOperation} from '../../reducer/data/data';
import {ActionCreator} from '../../reducer/state/actions';
import {
  getUploadingState,
  getPopupState,
  getSimilarFilms,
  getMovies,
  getActiveCard
} from '../../reducer/state/selectors';

const mapStateToProps = (state) => {
  return {
    films: getMovies(state),
    isUploaded: getUploadingState(state),
    isPopupActive: getPopupState(state),
    filteredFilms: getSimilarFilms(state),
    activeFilmCard: getActiveCard(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFilmCardClick(id) {
    dispatch(ActionCreator.setActiveFilm(id));
  },
  loadFilms() {
    dispatch(DataOperation.loadFilms());
  }
});

export {mapStateToProps, mapDispatchToProps};
// export default connect(mapStateToProps, mapDispatchToProps)(App);
