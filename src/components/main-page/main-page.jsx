import FilmsList from '../films-list/films-list';
import ShowMoreButton from '../show-more-button/show-more-button';
import Filters from '../filters/filters';
import VideoScreen from '../video-screen/video-screen';
import MainPromoFilm from '../main-promo-film/main-promo-film';

const MainPage = (props) => {
  const {
    films,
    onDataChange,
    onPlayButtonClick,
    onCloseButtonClick,
    isPlaying
  } = props;

  const promoFilm = films[0];

  return (
    <>
      {isPlaying &&
        <VideoScreen
          film={promoFilm}
          onCloseButtonClick={onCloseButtonClick}
        />
      }

      {!isPlaying &&
        <>
          <div>
            <section className="movie-card">
              <div className="movie-card__bg">
                <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
              </div>

              <h1 className="visually-hidden">WTW</h1>

              <header className="page-header movie-card__head">
                <div className="logo">
                  <a className="logo__link">
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

              <MainPromoFilm
                film={promoFilm}
                onPlayButtonClick={onPlayButtonClick}
              />

            </section>
            <div className="page-content">
              <section className="catalog">
                <h2 className="catalog__title visually-hidden">Catalog</h2>

                <Filters
                  films={films}
                />

                <FilmsList
                  films={films}
                  onDataChange={onDataChange}
                />

                <ShowMoreButton/>

              </section>

              <footer className="page-footer">
                <div className="logo">
                  <a className="logo__link logo__link--light">
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
          </div>
        </>
      }
    </>
  );
};

/* eslint camelcase: ["error", {properties: "never"}] */
MainPage.propTypes = {
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
  onPlayButtonClick: PropTypes.func.isRequired,
  onCloseButtonClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default MainPage;
