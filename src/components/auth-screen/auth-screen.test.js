import AuthScreen from './auth-screen';
import {Route, BrowserRouter} from "react-router-dom";

describe(`Render FilmsList correctly`, () => {
  it(`Render mock data the right way`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Route>
            <AuthScreen
              onSubmit={() => {}}
              history={{}}
              loadFavorites={() => {}}
              loadPromoFilm={() => {}}
              loadFilms={() => {}}
            />
          </Route>
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
