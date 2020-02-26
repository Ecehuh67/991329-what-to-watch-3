import ShowMoreButton from './show-more-button';
import {movies} from '../../utils/test-mocks';
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

describe(`Render ShowMoreButton correctly`, () => {
  it(`There is no showMoreButton`, () => {
    const store = mockStore({
      films: movies,
      showedFilms: 10,
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <ShowMoreButton
              onShowMoreButtonClick={() => {}}
              showedFilms={store.showedFilms}
              films={store.films}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`There is the showMoreButton`, () => {
    const store = mockStore({
      films: movies,
      showedFilms: 0,
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <ShowMoreButton
              onShowMoreButtonClick={() => {}}
              showedFilms={0}
              films={movies}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
