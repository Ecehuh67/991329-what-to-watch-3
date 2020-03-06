import FilmCard from './film-card';
import {movies} from '../../utils/test-mocks';

const film = movies[1];

describe(`Render FilmCard correctly`, () => {
  it(`Render mock data the right way`, () => {
    const tree = renderer.create(
        <FilmCard
          film={film}
          onDataChange={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        >
          <video />
        </FilmCard>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
