import withPopup from "./with-popup";
import {movies} from '../../utils/test-mocks';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus, DEFAULT_GENRE, DEFAULT_SHOWED_FILMS} from "../../utils/consts";

const film = movies[1];
const mockStore = configureStore([]);

const MockComponent = (props) => {
  const {children} = props;

  return (
    <>
      {children}
    </>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const MockComponentWrapped = withPopup(MockComponent);

it(`withPopup is rendered correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films: movies,
      isUploaded: true,
      comments: []
    },
    [NameSpace.STATE]: {
      chosenGenre: DEFAULT_GENRE,
      showedFilms: DEFAULT_SHOWED_FILMS,
      activeFilmCard: null
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userAvatar: ``
    }
  });

  const tree = renderer.create((
    <Provider store={store}>
      <MockComponentWrapped
        film={film}
      />
    </Provider>
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
