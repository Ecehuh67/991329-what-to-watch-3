import ShowMoreButton from './show-more-button';
import {movies} from '../../utils/test-mocks';
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space";
import {DEFAULT_GENRE} from '../../utils/consts';

const mockStore = configureStore([]);

describe(`Render ShowMoreButton correctly`, () => {
  it(`There is no showMoreButton`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        films: movies,
        isUploaded: true,
      },
      [NameSpace.STATE]: {
        chosenGenre: DEFAULT_GENRE,
        showedFilms: 10,
        isPopupActive: false,
        activeFilmCard: null
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <ShowMoreButton
              onShowMoreButtonClick={() => {}}
              showedFilms={10}
              films={movies}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`There is the showMoreButton`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        films: movies,
        isUploaded: true,
      },
      [NameSpace.STATE]: {
        chosenGenre: DEFAULT_GENRE,
        showedFilms: 1,
        isPopupActive: false,
        activeFilmCard: null
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <ShowMoreButton
              onShowMoreButtonClick={() => {}}
              showedFilms={0}
              films={movies}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
