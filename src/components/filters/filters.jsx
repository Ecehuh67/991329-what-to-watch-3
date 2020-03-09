import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from './filters.connect';

const Filters = (props) => {
  const {onFilterClick, chosenGenre, listGenres} = props;

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

/* eslint camelcase: ["error", {properties: "never"}] */
Filters.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        poster_image: PropTypes.string.isRequired,
        preview_image: PropTypes.string.isRequired,
        background_image: PropTypes.string.isRequired,
        background_color: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        scores_count: PropTypes.number.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.arrayOf(PropTypes.string.isRequired),
        run_time: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
        released: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        is_favorite: PropTypes.bool.isRequired,
        video_link: PropTypes.string.isRequired,
        preview_video_link: PropTypes.string.isRequired,
      })
  ).isRequired,
  onFilterClick: PropTypes.func.isRequired,
  chosenGenre: PropTypes.string.isRequired,
  listGenres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export {Filters};
export default connect(mapStateToProps, mapDispatchToProps)(Filters);
