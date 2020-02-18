import Popup from './popup';

const emptyData = {
  title: ``,
  image: ``
};

const film = {
  title: `The corn`,
  image: `img/the corn.jpg`
};

describe(`Render Popup correctly`, () => {
  it(`Render empty data like obj`, () => {
    const tree = renderer.create(
        <Popup
          film={emptyData}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Render mock data the right way`, () => {
    const tree = renderer.create(
        <Popup
          film={film}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
