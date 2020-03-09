import {shallow} from "enzyme";
import VideoScreen from './video-screen';
import {movies} from '../../utils/test-mocks';

const film = movies[1];

it(`When user click on an image the func return the data of film`, () => {
  const onTitleClick = jest.fn((value) => value);

  const videoScreen = shallow(
      <VideoScreen
        film={film}
        onPlayButtonClick={() => {}}
        onStopButtonClick={() => {}}
        onShowHideButtonClick={onTitleClick}
        state={{isVideoActive: true}}
      />
  );

  const element = videoScreen.find(`.player__exit`);

  element.props().onClick();

  expect(onTitleClick.mock.calls.length).toBe(1);
  expect(onTitleClick.mockReturnValue(`return value`));
});
