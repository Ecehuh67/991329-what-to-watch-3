const MainPromoFilm = (props) => {
  const {film, onShowHideButtonClick} = props;

  return (
    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={film.poster_image} alt={film.name} width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <h2 className="movie-card__title">{film.name}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{film.genre}</span>
            <span className="movie-card__year">{film.released}</span>
          </p>

          <div className="movie-card__buttons">
            <button
              className="btn btn--play movie-card__button"
              type="button"
              onClick={
                () => {
                  onShowHideButtonClick();
                }
              }
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* eslint camelcase: ["error", {properties: "never"}] */
MainPromoFilm.propTypes = {
  film: PropTypes.shape({
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
  }).isRequired,
  onShowHideButtonClick: PropTypes.func.isRequired,
};

export default MainPromoFilm;
