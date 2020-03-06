import {ActionCreator} from '../../reducer/state/actions';
import {DEFAULT_GENRE, DEFAULT_GENRES_AMOUNT} from '../../utils/consts';
import NameSpace from '../../reducer/name-space';
import {
  getFilms,
  getChosenGenre,
  getListGenres
} from '../../reducer/state/selectors';

const mapStateToProps = (state) => {
  return {
    films: getFilms(state),
    chosenGenre: getChosenGenre(state),
    listGenres: getListGenres(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(genre) {
    dispatch(ActionCreator.changeFilteredGenre(genre));
  }
});

export {mapStateToProps, mapDispatchToProps};
