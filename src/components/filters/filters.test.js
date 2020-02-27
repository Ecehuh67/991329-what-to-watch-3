import Filters from './filters';
import {movies} from '../../utils/test-mocks';
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

const emptyData = [
  {
    title: ``,
    image: ``,
    preview: ``,
    genre: ``
  },
  {
    title: ``,
    image: ``,
    preview: ``,
    genre: ``
  }
];

describe(`Render Filters correctly`, () => {
  it(`Render empty data like obj`, () => {
    const store = mockStore({
      films: emptyData,
      chosenGenre: `All genres`
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Filters
              films={store.films}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Render mock data right way`, () => {
    const store = mockStore({
      films: movies,
      chosenGenre: `All genres`
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Filters
              films={store.films}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
