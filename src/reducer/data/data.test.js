import {reducer} from "./data";
import {ActionType} from './actions';
import {movies} from '../../utils/test-mocks';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    films: [],
    isUploaded: false,
  });
});

it(`Reducer should set active film and change flag of Popup`, () => {
  expect(reducer(
      {
        films: [],
        isUploaded: false,
      },
      {
        type: ActionType.LOAD_FILMS,
        payload: movies,
      })
  ).toEqual(
      {
        films: movies,
        isUploaded: true,
      }
  );
});
