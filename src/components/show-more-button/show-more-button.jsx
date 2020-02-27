import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from './show-more-button.connect';

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

export {ShowMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
