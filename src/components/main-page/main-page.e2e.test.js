import {shallow} from 'enzyme';
import MainPage from './main-page';
import {movies} from '../../utils/test-mocks';

it(`Should title of the film be clicked`, () => {
  const onTitleButtonHandler = jest.fn();
  const onPlayButtonHandler = jest.fn();
  const onStopButtonHandler = jest.fn();
  const onShowHideButtonClick = jest.fn();

  const mainPage = shallow(
      <MainPage
        films={movies}
        onDataChange={onTitleButtonHandler}
        onPlayButtonClick={onPlayButtonHandler}
        onStopButtonClick={onStopButtonHandler}
        onShowHideButtonClick={onShowHideButtonClick}
        state={{isVideoActive: false}}
        authorizationStatus={`AUTH`}
        onSignInFormClick={() => {}}
        onValidateUser={() => {}}
        login={() => {}}
        userAvatar={`/img/true.png`}
      />
  );

  const titleElement = mainPage.find(`.small-movie-card__image`);

  titleElement.forEach((el) => el.props().onClick());

  expect(onTitleButtonHandler.mock.calls.length).toBe(titleElement.length);
});
