import Popup from './popup';
import {movies} from '../../utils/test-mocks';

const emptyData = {
  title: ``,
  image: ``,
  genre: ``,
  preview: ``
};

const film = {
  title: `The corn`,
  image: `img/the corn.jpg`,
  genre: ``,
  preview: ``
};

describe(`Render Popup correctly`, () => {
  it(`Render empty data like obj`, () => {
    const tree = renderer.create(
        <Popup
          film={emptyData}
          films={[]}
          onDataChange={() => {}}
        >
          <div/>
        </Popup>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Render mock data the right way`, () => {
    const tree = renderer.create(
        <Popup
          film={film}
          films={movies}
          onDataChange={() => {}}
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
