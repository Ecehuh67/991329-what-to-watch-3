import MainPromoFilm from './main-promo-film';
import {movies} from '../../utils/test-mocks';

const film = movies[1];

describe(`Render LoadScreen correctly`, () => {
  it(`Render data the right way`, () => {
    const tree = renderer.create(
        <MainPromoFilm
          film={film}
          onPlayButtonClick={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
