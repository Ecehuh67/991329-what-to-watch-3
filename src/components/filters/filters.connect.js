import {ActionCreator} from "../../actions.js";
import {DEFAULT_GENRE, DEFAULT_GENRES_AMOUNT} from '../../utils/consts';

const mapStateToProps = (state) => {
  return {
    films: state.films,
    chosenGenre: state.chosenGenre,
    listGenres: (() => {
      const uniqueGenres = Array.from(new Set(state.films.map((film) => film.genre))).slice(0, DEFAULT_GENRES_AMOUNT - 1);
      return [].concat(DEFAULT_GENRE).concat(uniqueGenres);
    })()
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(genre) {
    dispatch(ActionCreator.changeFilteredGenre(genre));
  }
});

export {mapStateToProps, mapDispatchToProps};
