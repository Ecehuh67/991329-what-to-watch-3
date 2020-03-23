import MainPage from '../main-page/main-page';
import Popup from '../popup/popup';
import VideoScreen from '../video-screen/video-screen';
import PrivateRoute from '../private-route/private-route.connect';
import LoadScreen from '../load-screen/load-screen';
import AuthScreen from '../auth-screen/auth-screen';
import Review from '../review/review';
import withPopup from '../../hocs/with-popup/with-popup';
import withReview from '../../hocs/with-review/with-review';
import withVideoScreen from "../../hocs/with-video-screen/with-video-screen";
import Favorites from '../favorite-list/favorite-list';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {AppRoute} from '../../utils/consts';

const PopupWrapped = withPopup(Popup);
const ReviewWrapped = withReview(Review);
const VideoScreenWrapped = withVideoScreen(VideoScreen);

export default class App extends React.PureComponent {
  componentDidMount() {
    const {loadFilms, requireAuth, loadPromoFilm, loadFavorites} = this.props;

    loadPromoFilm();
    loadFilms();
    requireAuth(loadFavorites);
  }

  _renderApp() {
    const {
      films,
      isUploaded,
      onFilmCardClick,
      authorizationStatus,
      userAvatar,
    } = this.props;

    if (!isUploaded) {
      return (
        <LoadScreen
        />
      );
    }

    return (
      <MainPage
        films={films}
        onDataChange={onFilmCardClick}
        authorizationStatus={authorizationStatus}
        userAvatar={userAvatar}
      />
    );

  }

  render() {
    const {
      favorites,
      onFilmCardClick,
      activeFilmCard,
      filteredFilms,
      authorizationStatus,
      login,
      postComment,
      promoFilm,
      loadComments,
      addToFavorite,
      loadFavorites,
      loadFilms,
      loadPromoFilm
    } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            {this._renderApp()}
          </Route>
          <Route exact path={AppRoute.SIGN_IN}
            render={(props) =>
              <AuthScreen
                {...props}
                onSubmit={login}
                loadFavorites={loadFavorites}
                loadFilms={loadFilms}
                loadPromoFilm={loadPromoFilm}
              />
            }
          />
          <Route exact path="/player/:id"
            render={(props) =>
              <VideoScreenWrapped
                {...props}
                film={promoFilm}
              />
            }
          />
          <Route exact path="/films/:id">
            <PopupWrapped
              film={activeFilmCard}
              films={filteredFilms}
              onDataChange={onFilmCardClick}
              postComment={postComment}
              authorizationStatus={authorizationStatus}
              loadComments={loadComments}
              addToFavorite={addToFavorite}
            />
          </Route>

          <PrivateRoute
            exact
            path={AppRoute.MY_LIST}
            render={(props) => {
              return (
                <Favorites
                  {...props}
                  films={favorites}
                  onDataChange={onFilmCardClick}
                />
              );
            }}
          />

          <PrivateRoute
            exact
            path="/films/:id/review"
            render={(props) => {
              return (
                <ReviewWrapped
                  {...props}
                  film={activeFilmCard}
                  onSubmit={postComment}
                />
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

/* eslint camelcase: ["error", {properties: "never"}] */
App.propTypes = {
  isUploaded: PropTypes.bool.isRequired,
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
  onFilmCardClick: PropTypes.func.isRequired,
  activeFilmCard: PropTypes.oneOfType([
    PropTypes.any.isRequired,
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
    }).isRequired,
  ]),
  filteredFilms: PropTypes.oneOfType([
    PropTypes.any.isRequired,
    PropTypes.arrayOf(
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
    ),
  ]),
  loadFilms: PropTypes.func.isRequired,
  requireAuth: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  postComment: PropTypes.func.isRequired,
  loadPromoFilm: PropTypes.func.isRequired,
  loadFavorites: PropTypes.func.isRequired,
  userAvatar: PropTypes.string.isRequired,
  favorites: PropTypes.oneOfType([
    PropTypes.any.isRequired,
    PropTypes.arrayOf(
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
    ),
  ]),
  loadComments: PropTypes.func.isRequired,
  addToFavorite: PropTypes.func.isRequired,
  promoFilm: PropTypes.object.isRequired
};
