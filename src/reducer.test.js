import {reducer} from "./reducer";
import {ActionType} from './actions';
import {films} from './mocks/films';
import {DEFAULT_GENRE, DEFAULT_SHOWED_FILMS} from './utils/consts';

const film = {
  title: `The Call`,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  genre: `Drama`
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    chosenGenre: DEFAULT_GENRE,
    isPopupActive: false,
    showedFilms: DEFAULT_SHOWED_FILMS,
    activeFilmCard: {
      title: ``,
      image: ``,
      genre: ``,
      preview: ``
    },
    films
  });
});

it(`Reducer should set active film and change flag of Popup`, () => {
  expect(reducer({
    chosenGenre: DEFAULT_GENRE,
    isPopupActive: false,
    showedFilms: DEFAULT_SHOWED_FILMS,
    activeFilmCard: {
      title: ``,
      image: ``,
      genre: ``,
      preview: ``
    },
    films
  }, {
    type: ActionType.SET_ACTIVE_CARD,
    payload: film,
  })).toEqual({
    chosenGenre: DEFAULT_GENRE,
    isPopupActive: true,
    showedFilms: DEFAULT_SHOWED_FILMS,
    activeFilmCard: {
      title: film.title,
      image: film.image,
      genre: film.genre,
      preview: film.preview
    },
    films
  });
});

it(`Reducer should change chosen Genre`, () => {
  expect(reducer({
    chosenGenre: DEFAULT_GENRE,
    isPopupActive: false,
    showedFilms: DEFAULT_SHOWED_FILMS,
    activeFilmCard: {
      title: ``,
      image: ``,
      genre: ``,
      preview: ``
    },
    films
  }, {
    type: ActionType.CHANGE_FILTERED_GENRE,
    payload: `Crime`,
  })).toEqual({
    chosenGenre: `Crime`,
    isPopupActive: false,
    showedFilms: DEFAULT_SHOWED_FILMS,
    activeFilmCard: {
      title: ``,
      image: ``,
      genre: ``,
      preview: ``
    },
    films
  });
});

it(`Reducer should change showed film pf amout`, () => {
  expect(reducer({
    chosenGenre: DEFAULT_GENRE,
    isPopupActive: false,
    showedFilms: DEFAULT_SHOWED_FILMS,
    activeFilmCard: {
      title: ``,
      image: ``,
      genre: ``,
      preview: ``
    },
    films
  }, {
    type: ActionType.SHOW_MORE_FILMS,
    payload: DEFAULT_SHOWED_FILMS,
  })).toEqual({
    chosenGenre: DEFAULT_GENRE,
    isPopupActive: false,
    showedFilms: DEFAULT_SHOWED_FILMS * 2,
    activeFilmCard: {
      title: ``,
      image: ``,
      genre: ``,
      preview: ``
    },
    films
  });
});
