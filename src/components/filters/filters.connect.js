import {ActionCreator} from '../../reducer/data/actions';
import {DEFAULT_GENRE, DEFAULT_GENRES_AMOUNT} from '../../utils/consts';
import NameSpace from '../../reducer/name-space';

const mapStateToProps = (state) => {
  return {
    films: state[NameSpace.DATA].films,
    chosenGenre: state[NameSpace.DATA].chosenGenre,
    listGenres: (() => {
      const uniqueGenres = Array.from(new Set(state[NameSpace.DATA].films.map((film) => film.genre))).slice(0, DEFAULT_GENRES_AMOUNT - 1);
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
