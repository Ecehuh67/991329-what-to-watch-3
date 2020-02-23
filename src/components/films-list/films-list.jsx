import FilmCard from '../film-card/film-card';

const getIdenticalFilms = (movies, measure) => {
  const index = movies.indexOf(measure);
  const newList = [].concat(movies.slice(0, index), movies.slice(index + 1));

  return newList
    .slice()
    .filter((movie) => movie.genre === measure.genre)
    .slice(0, 3);
};

const FilmsList = (props) => {
  const {films, onDataChange, getSimilarFilms} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => {
        const similarFilms = getIdenticalFilms(films, film);

        return (
          <FilmCard
            film={film}
            similarFilms={similarFilms}
            getSimilarFilms={getSimilarFilms}
            onDataChange={onDataChange}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default FilmsList;

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired
      })
  ).isRequired,
  onDataChange: PropTypes.func.isRequired,
  getSimilarFilms: PropTypes.func.isRequired
};
