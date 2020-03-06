import Popup from './popup';
import {movies} from '../../utils/test-mocks';

const film = movies[1];

describe(`Render Popup correctly`, () => {
  it(`Render mock data the right way`, () => {
    const tree = renderer.create(
        <Popup
          film={film}
          films={movies}
          onDataChange={() => {}}
          onPlayButtonClick={() => {}}
          onCloseButtonClick={() => {}}
          isPlaying={false}
        >
          <div/>
        </Popup>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
