import VideoPlayer from './video-player';
import {movies} from '../../utils/test-mocks';

const film = movies[1];

it(`VideoPlayer is rendered correctly`, () => {
  const tree = renderer.create(
      <VideoPlayer
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
