import FilmsList from '../films-list/films-list';
import VideoScreen from '../video-screen/video-screen';

export default class Popup extends React.PureComponent {
  render() {
    const {
      film,
      onDataChange,
      films,
      children,
      onPlayButtonClick,
      onCloseButtonClick,
      isPlaying
    } = this.props;

    return (
      <>
        {isPlaying &&
          <VideoScreen
            film={film}
            onCloseButtonClick={onCloseButtonClick}
          />
        }

      {!isPlaying &&
        <>
          <section className="movie-card movie-card--full" style={{background: film.background_color}}>
            <div className="movie-card__hero">
              <div className="movie-card__bg">
                <img src={film.background_image} alt={film.name} />
              </div>

              <h1 className="visually-hidden">WTW</h1>

              <header className="page-header movie-card__head">
                <div className="logo">
                  <a href="main.html" className="logo__link">
                    <span className="logo__letter logo__letter--1">W</span>
                    <span className="logo__letter logo__letter--2">T</span>
                    <span className="logo__letter logo__letter--3">W</span>
                  </a>
                </div>

                <div className="user-block">
                  <div className="user-block__avatar">
                    <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                  </div>
                </div>
              </header>

              <div className="movie-card__wrap">
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
                    <a href="add-review.html" className="btn movie-card__button">Add review</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="movie-card__wrap movie-card__translate-top">
              <div className="movie-card__info">
                <div className="movie-card__poster movie-card__poster--big">
                  <img src={film.poster_image} alt={film.name} width="218" height="327" />
                </div>

                <div className="movie-card__desc">

                  {children}

                </div>
              </div>
            </div>
          </section>

          <div className="page-content">
            <section className="catalog catalog--like-this">
              <h2 className="catalog__title">More like this</h2>

              <FilmsList
                films={films}
                onDataChange={onDataChange}
              />

            </section>

            <footer className="page-footer">
              <div className="logo">
                <a href="main.html" className="logo__link logo__link--light">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>

              <div className="copyright">
                <p>© 2019 What to watch Ltd.</p>
              </div>
            </footer>
          </div>
        </>
      }
    </>
    );
  }
}

/* eslint camelcase: ["error", {properties: "never"}] */
Popup.propTypes = {
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
  onDataChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onCloseButtonClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};
