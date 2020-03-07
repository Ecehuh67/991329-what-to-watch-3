import LoadScreen from './load-screen';

describe(`Render LoadScreen correctly`, () => {
  it(`Render data the right way`, () => {
    const tree = renderer.create(
        <LoadScreen
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
