import React from 'react';
import renderer from "react-test-renderer";
import MainPage from './main-page.jsx';

it(`Render main-page correctly`, () => {
  const tree = renderer
    .create(<MainPage
      films={[]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
