import {shallow} from "enzyme";
import FilmCard from './film-card';

const film = {
  title: `The corn`,
  image: `img/the corn.jpg`
};

it(`When user click on an image the func return the data of film`, () => {
  const onTitleClick = jest.fn((value) => value);

  const filmCard = shallow(
      <FilmCard
        film={film}
        handler={onTitleClick}
      />
  );

  const element = filmCard.find(`.small-movie-card__image`);

  element.props().onClick();

  expect(onTitleClick.mock.calls.length).toBe(1);
  expect(onTitleClick.mockReturnValue(`return value`));
});
