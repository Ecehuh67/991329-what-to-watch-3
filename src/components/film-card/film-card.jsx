import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/consts';

export default class FilmCard extends React.PureComponent {
  render() {
    const {film, onDataChange, children, onMouseEnter, onMouseLeave} = this.props;

    return (
      <article className="small-movie-card catalog__movies-card">
        <Link
          /* eslint-disable-next-line new-cap */
          to={AppRoute.FILM(film.id)}
        >
          <div
            className="small-movie-card__image"
            onClick={
              () => {
                onDataChange(film.id);
              }
            }
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >

            {children}

          </div>
        </Link>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
        </h3>
      </article>
    );
  }
}

/* eslint camelcase: ["error", {properties: "never"}] */
FilmCard.propTypes = {
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
  onDataChange: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};
