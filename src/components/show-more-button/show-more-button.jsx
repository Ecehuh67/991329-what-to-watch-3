import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from './show-more-button.connect';

const ShowMoreButton = (props) => {
  const {onShowMoreButtonClick, showedFilms, films} = props;

  if (showedFilms >= films.length) {
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

/* eslint camelcase: ["error", {properties: "never"}] */
ShowMoreButton.propTypes = {
  onShowMoreButtonClick: PropTypes.func.isRequired,
  showedFilms: PropTypes.number.isRequired,
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
};

export {ShowMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
