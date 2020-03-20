import Favorites from './favorite-list';
import {movies} from '../../utils/test-mocks';
import {Route, BrowserRouter} from "react-router-dom";

describe(`Render Favorite list correctly`, () => {
  it(`Render mock data the right way`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Route>
            <Favorites
              films={movies}
              onDataChange={() => {}}
            />
          </Route>
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
