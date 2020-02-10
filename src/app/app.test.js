import renderer from "react-test-renderer";
import App from './app';
import React from 'react';
import {movies} from '../utils/test-mocks';

describe(`render App`, () => {
  it(`Render an empty array correctly`, () => {
    const tree = renderer
      .create(<App
        films={[]}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Render the mocks data right way`, () => {
    const tree = renderer
      .create(<App
        films={movies}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
