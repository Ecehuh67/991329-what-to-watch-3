import Tabs from './tabs';

describe(`Render Tabs correctly`, () => {
  it(`Render empty data`, () => {
    const tree = renderer.create(
        <Tabs
          isActive={``}
          onDataChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Render mock data the right way`, () => {
    const tree = renderer.create(
        <Tabs
          isActive={`Details`}
          onDataChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
