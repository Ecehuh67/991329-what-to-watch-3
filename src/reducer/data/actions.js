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
  }
};

export {ActionType, ActionCreator};
