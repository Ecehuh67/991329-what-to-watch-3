import {films} from './mocks/films';
import {DEFAULT_GENRE, DEFAULT_SHOWED_FILMS} from './utils/consts';

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

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

const ActionType = {
  CHANGE_FILTERED_GENRE: `CHANGE_FILTERED_GENRE`,
  SET_ACTIVE_CARD_GENRE: `SET_ACTIVE_CARD_GENRE`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`
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
  },
  showeMoreFilms: () => {
    return {
      type: ActionType.SHOW_MORE_FILMS,
      payload: DEFAULT_SHOWED_FILMS
    };
  }
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
    case ActionType.SET_ACTIVE_CARD_GENRE:
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

export {reducer, ActionType, ActionCreator};
