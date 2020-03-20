import VideoScreen from './video-screen';
import {movies} from '../../utils/test-mocks';

const film = movies[1];

describe(`Render VideoScreen correctly`, () => {
  it(`Render data the right way`, () => {
    const tree = renderer.create(
        <VideoScreen
          film={film}
          state={{
            duration: `120`,
            percent: `10`,
            isPlaying: true,
            isStopped: false
          }}
          onPlayButtonClick={() => {}}
          onStopButtonClick={() => {}}
          onCloseButtonClick={() => {}}
          videoRef={{current: null}}
          stopPlayVideo={() => {}}
          onTimeUpdate={() => {}}
          onFullScreenClick={() => {}}
        />,
        {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
