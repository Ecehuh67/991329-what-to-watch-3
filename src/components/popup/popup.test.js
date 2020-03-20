import Popup from './popup';
import Tabs from '../../components/tabs/tabs';
import {movies} from '../../utils/test-mocks';
import {Route, BrowserRouter} from "react-router-dom";
import {AuthorizationStatus} from '../../utils/consts';

const BOOKMARKS_LIST = [`Overview`, `Details`, `Reviews`];
const DEFAULT_BOOKMARK = `Overview`;

const film = movies[1];

describe(`Render Popup correctly`, () => {
  it(`Render mock data the right way`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Route>
            <Popup
              film={film}
              films={movies}
              onDataChange={() => {}}
              addToFavorite={() => {}}
              loadComments={() => {}}
              authorizationStatus={AuthorizationStatus.NO_AUTH}
            >
              <Tabs
                state={
                  {
                    activeTab: DEFAULT_BOOKMARK,
                    tabsList: BOOKMARKS_LIST,
                    listener: () => {},
                    leaveComment: false,
                  }
                }
              />
            </Popup>
          </Route>
        </BrowserRouter>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
