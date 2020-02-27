import {shallow} from 'enzyme';
import MainPage from './main-page';
import {movies} from '../../utils/test-mocks';

it(`Should title of the film be clicked`, () => {
  const onTitleButtonHandler = jest.fn();

  const mainPage = shallow(
      <MainPage
        films={movies}
        onDataChange={onTitleButtonHandler}
      />
  );

  const titleElement = mainPage.find(`.small-movie-card__image`);

  titleElement.forEach((el) => el.props().onClick());

  expect(onTitleButtonHandler.mock.calls.length).toBe(titleElement.length);
});
