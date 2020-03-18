import Favorites from './favorite-list';
import {movies} from '../../utils/test-mocks';

describe(`Render Favorite list correctly`, () => {
  it(`Render mock data the right way`, () => {
    const tree = renderer.create(
        <Favorites
          films={movies}
          onDataChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
