import App from './app';
import {movies} from '../../utils/test-mocks';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {DEFAULT_GENRE, DEFAULT_SHOWED_FILMS} from '../../utils/consts';
import {AuthorizationStatus} from '../../utils/consts';

const mockStore = configureStore([]);

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


describe(`render App`, () => {
  it(`Render Main page`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        films: movies,
        favorites: movies[1],
        promoFilm: movies[0],
        comments: comment,
        isUploaded: true
      },
      [NameSpace.STATE]: {
        chosenGenre: DEFAULT_GENRE,
        showedFilms: DEFAULT_SHOWED_FILMS,
        activeFilmCard: null
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userAvatar: ``
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              films={movies}
              isUploaded={true}
              activeFilmCard={null}
              filteredFilms={movies.slice(0, 2)}
              authorizationStatus={`NO_AUTH`}
              login={() => {}}
              onFilmCardClick={() => {}}
              loadFilms={() => {}}
              requireAuth={() => {}}
              loadPromoFilm={() => {}}
              loadFavorites={() => {}}
              loadComments={() => {}}
              favorites={movies.slice(0)}
              postComment={() => {}}
              promoFilm={movies[1]}
              addToFavorite={() => {}}
              userAvatar={`/img/true.png`}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
