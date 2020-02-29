import MainPage from './main-page';
import {movies} from '../../utils/test-mocks';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe(`render MainPage`, () => {
  it(`Render Main page`, () => {
    const store = mockStore({
      films: movies,
      onFilmCardClick: () => {},
      chosenGenre: `All genres`,
      videoPlayer: {
        isPlaying: false,
        isStoped: false,
      },
      showedFilms: 4
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <MainPage
              films={movies}
              onDataChange={() => {}}
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
