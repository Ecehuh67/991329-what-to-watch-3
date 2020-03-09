import FilmCard from '../film-card/film-card';
import withActiveCard from '../../hocs/with-active-card/with-active-card';

const FilmCardWrapped = withActiveCard(FilmCard);

const FilmsList = (props) => {
  const {films, onDataChange} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => {

        return (
          <FilmCardWrapped
            film={film}
            onDataChange={onDataChange}
            key={i}
          />
        );
      })}
    </div>
  );
};

/* eslint camelcase: ["error", {properties: "never"}] */
FilmsList.propTypes = {
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
};


export default FilmsList;
