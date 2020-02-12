import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainPage from './main-page';
import {movies} from '../utils/test-mocks';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title of the film be clicked`, () => {
  const onTitleButtonHandler = jest.fn();

  const mainPage = shallow(
      <MainPage
        films={movies}
        onTitleButtonHandler={onTitleButtonHandler}
      />
  );

  const titleElement = mainPage.find(`.small-movie-card__title`);

  titleElement.forEach((el) => el.props().onClick());

  expect(onTitleButtonHandler.mock.calls.length).toBe(titleElement.length);
});
