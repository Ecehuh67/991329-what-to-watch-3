import FilmCard from './film-card';
import {movies} from '../../utils/test-mocks';
import {Route, BrowserRouter} from "react-router-dom";

const film = movies[1];

describe(`Render FilmCard correctly`, () => {
  it(`Render mock data the right way`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Route>
            <FilmCard
              film={film}
              onDataChange={() => {}}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
            >
              <video />
            </FilmCard>
          </Route>
        </BrowserRouter>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
