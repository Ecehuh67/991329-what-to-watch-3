import FilmsList from './films-list';
import {movies} from '../../utils/test-mocks';

describe(`Render FilmsList correctly`, () => {
  it(`Render mock data the right way`, () => {
    const tree = renderer.create(
        <FilmsList
          films={movies}
          onDataChange={()=>{}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
