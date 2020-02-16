import {getRandomNumber} from '../../utils/utils';

const MAX_COUNT_KEY_ID = 10000;

const FilmCard = (props) => {
  const {film, handler} = props;
  const {title, image} = film;
  const keyId = getRandomNumber(MAX_COUNT_KEY_ID);

  return (
    <article className="small-movie-card catalog__movies-card" key={keyId}>
      <div className="small-movie-card__image" onClick={() => handler(film)}>
        <img src={image} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  handler: PropTypes.func.isRequired
};

export default FilmCard;
