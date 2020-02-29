import App from './app';
import {movies} from '../../utils/test-mocks';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe(`render App`, () => {
  it(`Render Main page`, () => {
    const store = mockStore({
      films: movies,
      activeFilmCard: movies[1],
      isPopupActive: false,
      showedFilms: 2,
      chosenGenre: `All genres`,
      videoPlayer: {
        isPlaying: false,
        isStoped: false,
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              films={movies}
              onFilmCardClick={() => {}}
              isPopupActive={store.isPopupActive}
              showedFilms={store.showedFilms}
              filteredFilms={movies.slice(0, 2)}
              onPlayButtonClick={() => {}}
              onCloseButtonClick={() => {}}
              videoPlayer={{isPlaying: false}}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Render Popup`, () => {
    const store = mockStore({
      films: movies,
      activeFilmCard: movies[1],
      isPopupActive: true,
      showedFilms: 4,
      chosenGenre: `All genres`,
      videoPlayer: {
        isPlaying: false,
        isStoped: false,
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              films={movies}
              onFilmCardClick={() => {}}
              isPopupActive={store.isPopupActive}
              showedFilms={store.showedFilms}
              filteredFilms={movies.slice(0, 2)}
              onPlayButtonClick={() => {}}
              onCloseButtonClick={() => {}}
              videoPlayer={{isPlaying: false}}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
