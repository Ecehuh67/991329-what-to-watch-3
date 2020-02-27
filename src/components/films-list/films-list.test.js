import FilmsList from './films-list';
import {movies} from '../../utils/test-mocks';

const emptyData = [
  {
    title: ``,
    image: ``,
    preview: ``,
    genre: ``
  },
  {
    title: ``,
    image: ``,
    preview: ``,
    genre: ``
  }
];

describe(`Render FilmsList correctly`, () => {
  it(`Render empty data like obj`, () => {
    const tree = renderer.create(
        <FilmsList
          films={emptyData}
          onDataChange={()=>{}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
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
