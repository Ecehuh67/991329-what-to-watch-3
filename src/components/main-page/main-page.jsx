import FilmsList from '../films-list/films-list';
import ShowMoreButton from '../show-more-button/show-more-button';
import Filters from '../filters/filters';
import VideoPlayer from '../video-player/video-player';
import MainPromoFilm from '../main-promo-film/main-promo-film';

const MainPage = (props) => {

  // const {films, onDataChange, onPlayButtonClick, onCloseButtonClick} = props;
  const {films, onDataChange} = props;

  const promoFilm = films[0];

  return (
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
  );
};

MainPage.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
      })
  ).isRequired,
  onDataChange: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onCloseButtonClick: PropTypes.func.isRequired,
  videoPlayer: PropTypes.shape({
    isPlaying: PropTypes.bool.isRequired
  })
};

export default MainPage;

//
// <MainPromoFilm
//   film={promoFilm}
// />


// {isPlaying &&
//   <VideoPlayer
//     onCloseButtonClick={onCloseButtonClick}
//     film={promoFilm}
//   />
// }



// <Filters
//   films={films}
// />
//
// <FilmsList
//   films={films}
//   onDataChange={onDataChange}
// />
//
// <ShowMoreButton/>
