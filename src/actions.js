import {DEFAULT_SHOWED_FILMS} from './utils/consts';

export const ActionType = {
  CHANGE_FILTERED_GENRE: `CHANGE_FILTERED_GENRE`,
  SET_ACTIVE_CARD: `SET_ACTIVE_CARD`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`
};

export const ActionCreator = {
  setActiveFIlm: (film) => {
    return {
      type: ActionType.SET_ACTIVE_CARD,
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
