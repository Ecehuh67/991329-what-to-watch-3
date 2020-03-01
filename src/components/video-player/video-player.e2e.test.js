import {shallow} from "enzyme";
import VideoPlayer from './video-player';

const film = {
  title: `The corn`,
  image: `img/the corn.jpg`,
  preview: `https://player.vimeo.com/external/352010586.sd.mp4?s=2e414f16dc7380d1d48fd68c61db096db8ca1b06&profile_id=139&oauth2_token_id=57447761`,
  genre: `Drama`
};

const video = {
  isPlaying: false
};

describe(`VideoPlayer changes attribute autoPlay`, () => {
  it(`Check that VideoPlayer has the attribute  if the boolean of true was given`, () => {

    const videoPlayer = shallow(
        <VideoPlayer
          videoPlayer={video}
          onCloseButtonClick={() => {}}
          onPlayButtonClick={() => {}}
          film={film}
          isActive={true}
        />
    );

    expect(videoPlayer.closest(`video`).is(`[autoPlay]`)).toBe(true);
  });
});
