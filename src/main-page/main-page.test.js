import renderer from "react-test-renderer";
import React from 'react';
import MainPage from './main-page';
import {movies} from '../utils/test-mocks';

const clickHandler = () => {};

describe(`render Main-Page`, () => {
  it(`Render an empty array correctly`, () => {
    const tree = renderer
      .create(<MainPage
        films={[]}
        onTitleButtonHandler={clickHandler}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Render the mocks data right way`, () => {
    const tree = renderer
      .create(<MainPage
        films={movies}
        onTitleButtonHandler={clickHandler}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
