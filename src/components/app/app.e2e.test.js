import {shallow} from "enzyme";
import App from './App';
import {movies} from '../../utils/test-mocks';

it(`When user click on an image the func return the data of film`, () => {
  const onTitleClick = jest.fn((value) => value);

  const filmCard = shallow(
      <App
        films={movies}
        onDataChange={onTitleClick}
      />
  );

  const elements = filmCard.find(`.small-movie-card__image`);

  elements.forEach((el) => el.props().onClick());

  expect(onTitleClick.mock.calls.length).toBe(elements.length);
  expect(onTitleClick.mockReturnValue(`return value`));
});
