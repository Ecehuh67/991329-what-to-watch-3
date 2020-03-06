import {extend} from "../../utils/utils";
import {ActionType, ActionCreator} from './actions';
import {DEFAULT_GENRE, DEFAULT_SHOWED_FILMS} from '../../utils/consts';

const initialState = {
  chosenGenre: DEFAULT_GENRE,
  showedFilms: DEFAULT_SHOWED_FILMS,
  isPopupActive: false,
  activeFilmCard: null
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
    case ActionType.SHOW_MORE_FILMS:
      return extend(
          state,
          {
            showedFilms: state.showedFilms + action.payload
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
  }

  return state;
};

export {reducer};
