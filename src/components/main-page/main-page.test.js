import MainPage from './main-page';
import {movies} from '../../utils/test-mocks';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus, DEFAULT_GENRE, DEFAULT_SHOWED_FILMS} from '../../utils/consts';
import {Route, BrowserRouter} from "react-router-dom";

const mockStore = configureStore([]);

describe(`render MainPage`, () => {
  it(`Render Main page`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        films: movies,
        favorites: movies[1],
        promoFilm: movies[0],
        comments: [],
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
            <BrowserRouter>
              <Route>
                <MainPage
                  films={movies}
                  onDataChange={() => {}}
                  onPlayButtonClick={() => {}}
                  onStopButtonClick={() => {}}
                  onShowHideButtonClick={() => {}}
                  state={{isVideoActive: false}}
                  authorizationStatus={`AUTH`}
                  onSignInFormClick={() => {}}
                  onValidateUser={() => {}}
                  login={() => {}}
                  userAvatar={`/img/true.png`}
                />
              </Route>
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
