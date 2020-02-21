import FilmCard from '../film-card/film-card';

const FilmsList = (props) => {
  const {films, onDataChange} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => {
        return (
          <FilmCard
            film={film}
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
        preview: PropTypes.string.isRequired
      })
  ).isRequired,
  onDataChange: PropTypes.func.isRequired
};
