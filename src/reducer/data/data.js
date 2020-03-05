import {extend} from "../../utils/utils";
import {ActionType, ActionCreator} from './actions';
import {DEFAULT_GENRE, DEFAULT_SHOWED_FILMS} from '../../utils/consts';

const initialState = {
  films: [],
  isUploaded: false,
  chosenGenre: DEFAULT_GENRE,
  showedFilms: DEFAULT_SHOWED_FILMS
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(response.data));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(
        state,
        {
          films: action.payload,
          isUploaded: true
        }
      );
  }

  return state;
};

export {reducer, Operation};
