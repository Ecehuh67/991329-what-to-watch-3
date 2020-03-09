import {reducer} from "./state";
import {ActionType} from './actions';
import {movies} from '../../utils/test-mocks';
import {DEFAULT_GENRE, DEFAULT_SHOWED_FILMS} from '../../utils/consts';

const film = movies[1];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    chosenGenre: DEFAULT_GENRE,
    showedFilms: DEFAULT_SHOWED_FILMS,
    isPopupActive: false,
    activeFilmCard: null
  });
});

it(`Reducer should set active film and change flag of Popup`, () => {
  expect(reducer(
      {
        chosenGenre: DEFAULT_GENRE,
        showedFilms: DEFAULT_SHOWED_FILMS,
        isPopupActive: false,
        activeFilmCard: null
      },
      {
        type: ActionType.SET_ACTIVE_CARD,
        payload: film.id,
      })
  ).toEqual(
      {
        chosenGenre: DEFAULT_GENRE,
        showedFilms: DEFAULT_SHOWED_FILMS,
        isPopupActive: true,
        activeFilmCard: film.id
      }
  );
});

it(`Reducer should change chosen Genre`, () => {
  expect(reducer(
      {
        chosenGenre: DEFAULT_GENRE,
        showedFilms: DEFAULT_SHOWED_FILMS,
        isPopupActive: false,
        activeFilmCard: null
      },
      {
        type: ActionType.CHANGE_FILTERED_GENRE,
        payload: `Crime`,
      })
  ).toEqual(
      {
        chosenGenre: `Crime`,
        showedFilms: DEFAULT_SHOWED_FILMS,
        isPopupActive: false,
        activeFilmCard: null
      }
  );
});

it(`Reducer should change chosen Genre`, () => {
  expect(reducer(
      {
        chosenGenre: DEFAULT_GENRE,
        showedFilms: DEFAULT_SHOWED_FILMS,
        isPopupActive: false,
        activeFilmCard: null
      },
      {
        type: ActionType.SHOW_MORE_FILMS,
        payload: DEFAULT_SHOWED_FILMS,
      })
  ).toEqual(
      {
        chosenGenre: DEFAULT_GENRE,
        showedFilms: DEFAULT_SHOWED_FILMS * 2,
        isPopupActive: false,
        activeFilmCard: null
      }
  );
});
