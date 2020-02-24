import {shallow} from "enzyme";
import FilmCard from './film-card';

const film = {
  title: `The corn`,
  image: `img/the corn.jpg`,
  preview: `https://player.vimeo.com/external/352010586.sd.mp4?s=2e414f16dc7380d1d48fd68c61db096db8ca1b06&profile_id=139&oauth2_token_id=57447761`
};

it(`When user click on an image the func return the data of film`, () => {
  const onTitleClick = jest.fn((value) => value);
  const condactFilms = jest.fn((value) => value);

  const filmCard = shallow(
      <FilmCard
        film={film}
        onDataChange={onTitleClick}
        getSimilarFilms={condactFilms}
        similarFilms={[]}
      />
  );

  const element = filmCard.find(`.small-movie-card__image`);

  element.props().onClick();

  expect(onTitleClick.mock.calls.length).toBe(1);
  expect(onTitleClick.mockReturnValue(`return value`));

  expect(condactFilms.mock.calls.length).toBe(1);
  expect(condactFilms.mockReturnValue(`return value`));
});
