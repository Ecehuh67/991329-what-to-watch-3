const MainPromoFilm = (props) => {
  const {film, onPlayButtonClick} = props;

  return (
    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={film.image} alt={film.title} width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <h2 className="movie-card__title">{film.title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{film.genre}</span>
            <span className="movie-card__year">2014</span>
          </p>

          <div className="movie-card__buttons">
            <button
              className="btn btn--play movie-card__button"
              type="button"
              onClick={
                () => {
                  onPlayButtonClick();
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

MainPromoFilm.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  }),
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default MainPromoFilm;
