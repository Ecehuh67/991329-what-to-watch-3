import {DEFAULT_SHOWED_FILMS} from '../../utils/consts';

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  CHANGE_FILTERED_GENRE: `CHANGE_FILTERED_GENRE`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
  SET_ACTIVE_CARD: `SET_ACTIVE_CARD`,
};

const ActionCreator = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films
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
  },
  setActiveFilm: (filmId) => {
    return {
      type: ActionType.SET_ACTIVE_CARD,
      payload: filmId
    };
  },
};

export {ActionType, ActionCreator};
