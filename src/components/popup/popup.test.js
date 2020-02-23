import Popup from './popup';

const emptyData = {
  title: ``,
  image: ``
};

const film = {
  title: `The corn`,
  image: `img/the corn.jpg`,
};

const similarFilms = [
  {
    title: `The mafia`,
    image: `img/the-mafia.jpg`,
    preview: `https://player.vimeo.com/external/352010586.sd.mp4?s=2e414f16dc7380d1d48fd68c61db096db8ca1b06&profile_id=139&oauth2_token_id=57447761`,
    genre: `Drama`
  },
  {
    title: `The Titanic`,
    image: `img/the.jpg`,
    preview: `https://player.vimeo.com/external/352010586.sd.mp4?s=2e414f16dc7380d1d48fd68c61db096db8ca1b06&profile_id=139&oauth2_token_id=57447761`,
    genre: `Drama`
  }
];

describe(`Render Popup correctly`, () => {
  it(`Render empty data like obj`, () => {
    const tree = renderer.create(
        <Popup
          film={emptyData}
          similarFilms={[]}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Render mock data the right way`, () => {
    const tree = renderer.create(
        <Popup
          film={film}
          similarFilms={similarFilms}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
