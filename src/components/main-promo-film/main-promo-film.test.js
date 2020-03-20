import MainPromoFilm from './main-promo-film';
import {movies} from '../../utils/test-mocks';
import {Route, BrowserRouter} from "react-router-dom";
import {AuthorizationStatus} from '../../utils/consts';

const film = movies[1];

describe(`Render LoadScreen correctly`, () => {
  it(`Render data the right way`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Route>
            <MainPromoFilm
              film={film}
              addToFavorite={() => {}}
              authorizationStatus={AuthorizationStatus.NO_AUTH}
            />
          </Route>
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
