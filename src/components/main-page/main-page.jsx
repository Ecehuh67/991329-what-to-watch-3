import FilmsList from '../films-list/films-list';
import ShowMoreButton from '../show-more-button/show-more-button.connect';
import Filters from '../filters/filters.connect';
import VideoScreen from '../video-screen/video-screen';
import AuthScreen from '../auth-screen/auth-screen';
import MainPromoFilm from '../main-promo-film/main-promo-film';
import {AuthorizationStatus} from '../../utils/consts';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/consts';

const MainPage = (props) => {
  const {
    films,
    onDataChange,
    authorizationStatus,
    // onSignInFormClick,
    // onValidateUser,
    login,
    userAvatar,
    loadFavorites
  } = props;

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

          {authorizationStatus === AuthorizationStatus.AUTH &&
            <div className="user-block">
              <Link
                to={AppRoute.MY_LIST}
              >
                <div className="user-block__avatar">
                  <img src={userAvatar} alt="User avatar" width="63" height="63" />
                </div>
              </Link>
            </div>
          }

          {authorizationStatus === AuthorizationStatus.NO_AUTH &&

            <div className="user-block">
              <Link
                className="user-block__link"
                to={AppRoute.SIGN_IN}
              >Sign in
              </Link>
            </div>
          }

        </header>

        <MainPromoFilm
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
  onShowHideButtonClick: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onStopButtonClick: PropTypes.func.isRequired,
  state: PropTypes.objectOf(PropTypes.bool).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onSignInFormClick: PropTypes.func.isRequired,
  onValidateUser: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

export default MainPage;

// {state.isSingFormActive &&
//   <AuthScreen
//     onSubmit={login}
//     onValidateUser={onValidateUser}
//   />
// }
