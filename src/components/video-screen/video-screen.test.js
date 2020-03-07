import VideoScreen from './video-screen';
import {movies} from '../../utils/test-mocks';

const film = movies[1];

describe(`Render LoadScreen correctly`, () => {
  it(`Render data the right way`, () => {
    const tree = renderer.create(
        <VideoScreen
          film={film}
          onPlayButtonClick={() => {}}
          onStopButtonClick={() => {}}
          onShowHideButtonClick={() => {}}
          state={{isVideoActive: true}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
