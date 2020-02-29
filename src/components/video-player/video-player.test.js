import VideoPlayer from './video-player';

const film = {
  title: `The corn`,
  image: `img/the corn.jpg`,
  preview: `https://player.vimeo.com/external/352010586.sd.mp4?s=2e414f16dc7380d1d48fd68c61db096db8ca1b06&profile_id=139&oauth2_token_id=57447761`
};

const video = {
  isPlaying: false
};

it(`VideoPlayer is rendered correctly`, () => {
  const tree = renderer.create(
      <VideoPlayer
        videoPlayer={video}
        onCloseButtonClick={() => {}}
        onPlayButtonClick={() => {}}
        film={film}
        isActive={true}
      />,
      {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
