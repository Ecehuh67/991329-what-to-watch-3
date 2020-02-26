import {films} from './mocks/films';

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const initialState = {
  chosenGenre: ``,
  filteredFilms: [],
  films
};

const ActionType = {
  CHANGE_FILTERED_GENRE: `CHANGE_FILTERED_GENRE`,
  GET_FILTERED_FILMS: `GET_FILTERED_FILMS`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTERED_GENRE:
      return extend(
        state,
        {filteredGenre: action.payload}
      )
  }

  return state;
};

export {reducer, ActionType};
