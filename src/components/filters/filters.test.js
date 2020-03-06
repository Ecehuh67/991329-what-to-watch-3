import Filters from './filters';
import {movies} from '../../utils/test-mocks';
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space";
import {DEFAULT_GENRE, DEFAULT_SHOWED_FILMS} from '../../utils/consts';

const mockStore = configureStore([]);

describe(`Render Filters correctly`, () => {
  it(`Render mock data right way`, () => {
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
            <Filters
              films={store.films}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
