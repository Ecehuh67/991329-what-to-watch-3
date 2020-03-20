import {reducer} from "./data";
import {ActionType} from './actions';
import {movies} from '../../utils/test-mocks';

const comment = {
  "id": 1,
  "user": {
    "id": 4,
    "name": `Kate Muir`
  },
  "rating": 8.9,
  "comment": `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  "date": `2019-05-08T14:13:56.569Z`
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    films: [],
    favorites: [],
    promoFilm: {},
    comments: [],
    isUploaded: false
  });
});

it(`Reducer should download films and change flag of Popup`, () => {
  expect(reducer(
      {
        films: [],
        favorites: [],
        promoFilm: {},
        comments: [],
        isUploaded: false
      },
      {
        type: ActionType.LOAD_FILMS,
        payload: movies,
      })
  ).toEqual(
      {
        films: movies,
        favorites: [],
        promoFilm: {},
        comments: [],
        isUploaded: true
      }
  );
});

it(`Reducer should download promo film`, () => {
  expect(reducer(
      {
        films: [],
        favorites: [],
        promoFilm: {},
        comments: [],
        isUploaded: false
      },
      {
        type: ActionType.LOAD_PROMO_FILM,
        payload: movies[1],
      })
  ).toEqual(
      {
        films: [],
        favorites: [],
        promoFilm: movies[1],
        comments: [],
        isUploaded: false
      }
  );
});

it(`Reducer should download comments`, () => {
  expect(reducer(
      {
        films: [],
        favorites: [],
        promoFilm: {},
        comments: [],
        isUploaded: false
      },
      {
        type: ActionType.LOAD_COMMENTS,
        payload: comment,
      })
  ).toEqual(
      {
        films: [],
        favorites: [],
        promoFilm: {},
        comments: comment,
        isUploaded: false
      }
  );
});

it(`Reducer should download favorites`, () => {
  expect(reducer(
      {
        films: [],
        favorites: [],
        promoFilm: {},
        comments: [],
        isUploaded: false
      },
      {
        type: ActionType.LOAD_FAVORITES,
        payload: movies[0],
      })
  ).toEqual(
      {
        films: [],
        favorites: movies[0],
        promoFilm: {},
        comments: [],
        isUploaded: false
      }
  );
});

it(`Reducer should update comments`, () => {
  expect(reducer(
      {
        films: [],
        favorites: [],
        promoFilm: {},
        comments: [],
        isUploaded: false
      },
      {
        type: ActionType.UPDATE_COMMENTS,
        payload: comment,
      })
  ).toEqual(
      {
        films: [],
        favorites: [],
        promoFilm: {},
        comments: comment,
        isUploaded: false
      }
  );
});
