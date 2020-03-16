import {createSelector} from "reselect";
import NameSpace from "../name-space";
import {DEFAULT_GENRE, DEFAULT_GENRES_AMOUNT} from '../../utils/consts';

const AMOUT_SIMILAR_FILMS = 4;

export const getUploadingState = (state) => state[NameSpace.DATA].isUploaded;
// export const getPopupState = (state) => state[NameSpace.STATE].isPopupActive;
export const getPromoFilm = (state) => state[NameSpace.DATA].promoFilm;
export const getActiveFilmCard = (state) => state[NameSpace.STATE].activeFilmCard;
export const getChosenGenre = (state) => state[NameSpace.STATE].chosenGenre;
export const getShowedFilmsCount = (state) => state[NameSpace.STATE].showedFilms;
export const getFilms = (state) => state[NameSpace.DATA].films;
export const getComments = (state) => state[NameSpace.DATA].comments;
export const getFavorites = (state) => state[NameSpace.DATA].favorites;

export const getSimilarFilms = createSelector(
    getFilms,
    getActiveFilmCard,
    (resultOne, resultTwo) => {
      if (resultTwo === null) {
        return null;
      }
      const index = resultOne.map((it) => it.id).indexOf(resultTwo);
      const targetGenre = resultOne[index].genre;
      const newList = [].concat(resultOne.slice(0, index), resultOne.slice(index + 1));

      return newList
        .slice()
        .filter((movie) => movie.genre === targetGenre)
        .slice(0, AMOUT_SIMILAR_FILMS);
    }
);

export const getMovies = createSelector(
    getChosenGenre,
    getFilms,
    getShowedFilmsCount,
    (resultOne, resultTwo, resultThree) => {
      if (resultOne === DEFAULT_GENRE) {
        return resultTwo.slice(0, resultThree);
      }
      return resultTwo.slice().filter((film) => film.genre === resultOne);
    }
);

export const getActiveCard = createSelector(
    getFilms,
    getActiveFilmCard,
    (resultOne, resultTwo) => {
      const index = resultOne.map((film) => film.id).indexOf(resultTwo);

      return resultOne[index];
    }
);

export const getListGenres = createSelector(
    getFilms,
    (resultOne) => {
      const uniqueGenres = Array
        .from(new Set(resultOne.map((film) => film.genre)))
        .slice(0, DEFAULT_GENRES_AMOUNT);
      return [].concat(DEFAULT_GENRE).concat(uniqueGenres);
    }
);

export const getFilteredGenreFilms = createSelector(
    getChosenGenre,
    getFilms,
    (resultOne, resultTwo) => {
      if (resultOne === DEFAULT_GENRE) {
        return resultTwo;
      }

      return resultTwo
        .slice()
        .filter((film) => film.genre === resultOne);
    }
);
