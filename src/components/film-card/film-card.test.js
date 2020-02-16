import FilmCard from './film-card';

const emptyData = {
  title: ``,
  image: ``
};

const film = {
  title: `The corn`,
  image: `img/the corn.jpg`
};

describe(`Render FilmCard correctly`, () => {
  it(`Render empty data like obj and func`, () => {
    const tree = renderer.create(
        <FilmCard
          film={emptyData}
          handler={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Render mock data the right way`, () => {
    const tree = renderer.create(
        <FilmCard
          film={film}
          handler={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
