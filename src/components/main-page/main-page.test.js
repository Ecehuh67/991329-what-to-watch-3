import MainPage from './main-page';
import {movies} from '../../utils/test-mocks';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {DEFAULT_GENRE} from '../../utils/consts';

const mockStore = configureStore([]);

describe(`render MainPage`, () => {
  it(`Render Main page`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        films: movies,
        isUploaded: true,
      },
      [NameSpace.STATE]: {
        chosenGenre: DEFAULT_GENRE,
        showedFilms: 5,
        isPopupActive: false,
        activeFilmCard: null
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <MainPage
              films={movies}
              onDataChange={() => {}}
              onPlayButtonClick={() => {}}
              onStopButtonClick={() => {}}
              onShowHideButtonClick={() => {}}
              state={{isVideoActive: false}}
              authorizationStatus={`AUTH`}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
