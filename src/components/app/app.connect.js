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
  }
});

export {mapStateToProps, mapDispatchToProps};
