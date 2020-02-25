import Tabs from './tabs';

const state = {
  activeTab: `Due`,
  tabsList: [`Due`, `Vue`],
  listener: () => {}
};

const emptyData = {
  activeTab: ``,
  tabsList: [``, ``],
  listener: () => {}
};

describe(`Render Tabs correctly`, () => {
  it(`Render empty data`, () => {
    const tree = renderer.create(
        <Tabs
          state={emptyData}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Render mock data the right way`, () => {
    const tree = renderer.create(
        <Tabs
          state={state}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
