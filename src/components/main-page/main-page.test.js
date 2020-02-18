import MainPage from './main-page';
import {movies} from '../../utils/test-mocks';

const clickHandler = () => {};

describe(`render Main-Page`, () => {
  it(`Render an empty array correctly`, () => {
    const tree = renderer
      .create(<MainPage
        films={[]}
        onDataChange={clickHandler}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Render the mocks data right way`, () => {
    const tree = renderer
      .create(<MainPage
        films={movies}
        onDataChange={clickHandler}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
