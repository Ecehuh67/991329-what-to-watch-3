import Review from "./review";
import {movies} from '../../utils/test-mocks';
import {Route, BrowserRouter} from "react-router-dom";

const film = movies[1];

describe(`Render Review correctly`, () => {
  it(`Render mock data the right way`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <Route>
            <Review
              film={film}
              onSubmit={() => {}}
              state={{isDisabled: false}}
              getRating={() => {}}
              getTextReview={() => {}}
            />
          </Route>
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
