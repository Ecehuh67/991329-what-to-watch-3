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

Filters.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
      })
  ).isRequired,
  onFilterClick: PropTypes.func.isRequired,
  chosenGenre: PropTypes.string.isRequired,
  listGenres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export {Filters};
export default connect(mapStateToProps, mapDispatchToProps)(Filters);
