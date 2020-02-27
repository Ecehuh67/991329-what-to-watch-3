import {ActionCreator} from "../../actions.js";
import {DEFAULT_GENRE} from '../../utils/consts';

const getFilteredFilms = (films, activeGenre) => {
  if (activeGenre === DEFAULT_GENRE) {
    return films;
  }

  return films.filter((film) => film.genre === activeGenre);
};

const mapStateToProps = (state) => {
  return {
    films: getFilteredFilms(state.films, state.chosenGenre),
    showedFilms: state.showedFilms,
    filteredFilms: state.filteredFilms
  };
};

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick() {
    dispatch(ActionCreator.showeMoreFilms());
  }
});

export {mapStateToProps, mapDispatchToProps};
