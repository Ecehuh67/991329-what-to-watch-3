import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {DEFAULT_GENRE} from '../../utils/consts';

const Filters = (props) => {
  const {films, onFilterClick, chosenGenre} = props;

  const uniqueGenres = Array.from(new Set(films.map((film) => film.genre)));
  const listGenres = [].concat(DEFAULT_GENRE).concat(uniqueGenres);

  return (
    <ul className="catalog__genres-list">
      {listGenres.map((genre, i) => {
        return (
          <li
            className={chosenGenre === genre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}
            key={i}
            onClick={() => {
              onFilterClick(genre);
            }}
          >
            <a href="#" className="catalog__genres-link">{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};

Filters.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
      })
  ).isRequired,
  onFilterClick: PropTypes.func.isRequired,
  chosenGenre: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    films: state.films,
    chosenGenre: state.chosenGenre
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(genre) {
    dispatch(ActionCreator.changeFilteredGenre(genre));
  }
});

export {Filters};
export default connect(mapStateToProps, mapDispatchToProps)(Filters);
