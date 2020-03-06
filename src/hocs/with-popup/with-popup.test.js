import withPopup from "./with-popup";
import {movies} from '../../utils/test-mocks';

const film = movies[1];

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
  const tree = renderer.create((
    <MockComponentWrapped
      film={film}
      films={movies}
      onDataChange={() => {}}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
