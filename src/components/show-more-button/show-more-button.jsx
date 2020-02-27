import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {DEFAULT_GENRE} from '../../utils/consts';

const ShowMoreButton = (props) => {
  const {onShowMoreButtonClick, showedFilms, films} = props;

  if (showedFilms > films.length) {
    return null;
  }

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={
          () => {
            onShowMoreButtonClick();
          }
        }
      >
        Show more
      </button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  onShowMoreButtonClick: PropTypes.func.isRequired,
  showedFilms: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired
      })
  ).isRequired
};

const getFilteredFilms = (films, activeGenre) => {
  if (activeGenre === DEFAULT_GENRE) {
    return films;
  }

  return films.filter((film) => film.genre === activeGenre);
};

const mapStateToProps = (state) => {
  return {
    films: getFilteredFilms(state.films, state.chosenGenre),
    showedFilms: state.showedFilms,
    filteredFilms: state.filteredFilms
  };
};

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick() {
    dispatch(ActionCreator.showeMoreFilms());
  }
});

export {ShowMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
