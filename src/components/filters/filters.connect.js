import {ActionCreator} from '../../reducer/state/actions';

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
