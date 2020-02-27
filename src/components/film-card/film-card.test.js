import FilmCard from './film-card';

const emptyData = {
  title: ``,
  image: ``,
  preview: ``
};

const film = {
  title: `The corn`,
  image: `img/the corn.jpg`,
  preview: `https://player.vimeo.com/external/352010586.sd.mp4?s=2e414f16dc7380d1d48fd68c61db096db8ca1b06&profile_id=139&oauth2_token_id=57447761`
};

describe(`Render FilmCard correctly`, () => {
  it(`Render empty data like obj`, () => {
    const tree = renderer.create(
        <FilmCard
          film={emptyData}
          onDataChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Render mock data the right way`, () => {
    const tree = renderer.create(
        <FilmCard
          film={film}
          onDataChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
