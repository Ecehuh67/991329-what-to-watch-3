import FilmsList from './films-list';
import {movies} from '../../utils/test-mocks';
import {Route, BrowserRouter} from "react-router-dom";

describe(`Render FilmsList correctly`, () => {
  it(`Render mock data the right way`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Route>
            <FilmsList
              films={movies}
              onDataChange={()=>{}}
            />
          </Route>
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
