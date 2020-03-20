import {shallow} from "enzyme";
import VideoScreen from './video-screen';
import {movies} from '../../utils/test-mocks';

const film = movies[1];

it(`When user click on an image the func return the data of film`, () => {
  const onCloseClick = jest.fn((value) => value);

  const videoScreen = shallow(
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
        onCloseButtonClick={onCloseClick}
        videoRef={{current: null}}
        stopPlayVideo={() => {}}
        onTimeUpdate={() => {}}
        onFullScreenClick={() => {}}
      />
  );

  const element = videoScreen.find(`.player__exit`);

  element.props().onClick();

  expect(onCloseClick.mock.calls.length).toBe(1);
  expect(onCloseClick.mockReturnValue(`return value`));
});
