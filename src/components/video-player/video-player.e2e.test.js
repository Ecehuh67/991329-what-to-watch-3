import {shallow} from "enzyme";
import VideoPlayer from './video-player';
import {movies} from '../../utils/test-mocks';

const film = movies[1];

describe(`VideoPlayer changes attribute autoPlay`, () => {
  it(`Check that VideoPlayer has the attribute  if the boolean of true was given`, () => {

    const videoPlayer = shallow(
        <VideoPlayer
          film={film}
          isActive={true}
        />
    );

    expect(videoPlayer.closest(`video`).is(`[autoPlay]`)).toBe(true);
  });
});
