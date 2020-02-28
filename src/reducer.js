import {films} from './mocks/films';
import {DEFAULT_GENRE, DEFAULT_SHOWED_FILMS} from './utils/consts';
import {extend} from './helpers/helpers';
import {ActionType} from './actions';

const initialState = {
  chosenGenre: DEFAULT_GENRE,
  isPopupActive: false,
  showedFilms: DEFAULT_SHOWED_FILMS,
  activeFilmCard: {
    title: ``,
    image: ``,
    genre: ``,
    preview: ``
  },
  films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTERED_GENRE:
      return extend(
          state,
          {
            chosenGenre: action.payload,
            showedFilms: DEFAULT_SHOWED_FILMS
          }
      );
    case ActionType.SET_ACTIVE_CARD:
      return extend(
          state,
          {
            activeFilmCard: action.payload,
            isPopupActive: true
          }
      );
    case ActionType.SHOW_MORE_FILMS:
      return extend(
          state,
          {
            showedFilms: state.showedFilms + action.payload
          }
      );
  }

  return state;
};

export {reducer};
