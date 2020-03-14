import App from './app';
import {movies} from '../../utils/test-mocks';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {DEFAULT_GENRE, DEFAULT_SHOWED_FILMS} from '../../utils/consts';

const mockStore = configureStore([]);

describe(`render App`, () => {
  it(`Render Main page`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        films: movies,
        isUploaded: true,
      },
      [NameSpace.STATE]: {
        chosenGenre: DEFAULT_GENRE,
        showedFilms: DEFAULT_SHOWED_FILMS,
        isPopupActive: false,
        activeFilmCard: null
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              films={movies}
              isUploaded={true}
              isPopupActive={false}
              activeFilmCard={null}
              filteredFilms={movies.slice(0, 2)}
              authorizationStatus={`AUTH`}
              login={() => {}}
              onFilmCardClick={() => {}}
              loadFilms={() => {}}
              requireAuth={() => {}}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Render Popup`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        films: movies,
        isUploaded: true,
      },
      [NameSpace.STATE]: {
        chosenGenre: DEFAULT_GENRE,
        showedFilms: DEFAULT_SHOWED_FILMS,
        isPopupActive: true,
        activeFilmCard: movies[1]
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              films={movies}
              isUploaded={true}
              isPopupActive={true}
              activeFilmCard={movies[1]}
              filteredFilms={movies.slice(0, 2)}
              authorizationStatus={`AUTH`}
              login={() => {}}
              onFilmCardClick={() => {}}
              loadFilms={() => {}}
              requireAuth={() => {}}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
