import {films} from './mocks/films';
import {DEFAULT_GENRE} from './utils/consts';

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const initialState = {
  chosenGenre: DEFAULT_GENRE,
  isPopupActive: false,
  activeFilmCard: ``,
  films
};

const ActionType = {
  CHANGE_FILTERED_GENRE: `CHANGE_FILTERED_GENRE`,
  FILTER_FILMS: `FILTER_FILMS`,
  SET_ACTIVE_CARD_GENRE: `SET_ACTIVE_CARD_GENRE`
};

const ActionCreator = {
  setActiveFIlmGenre: (film) => {
    return {
      type: ActionType.SET_ACTIVE_CARD_GENRE,
      payload: film
    };
  },
  changeFilteredGenre: (genre) => {
    return {
      type: ActionType.CHANGE_FILTERED_GENRE,
      payload: genre
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTERED_GENRE:
      return extend(
          state,
          {chosenGenre: action.payload}
      );
    case ActionType.SET_ACTIVE_CARD_GENRE:
      return extend(
          state,
          {
            activeFilmCard: action.payload,
            isPopupActive: true
          }
      );
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
