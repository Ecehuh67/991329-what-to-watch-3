export default class FilmCard extends React.PureComponent {
  render() {
    const {film, onDataChange, children, onMouseEnter, onMouseLeave} = this.props;

    return (
      <article className="small-movie-card catalog__movies-card">
        <div
          className="small-movie-card__image"
          onClick={() => {
            onDataChange(film.id);
          }
          }
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >

          {children}

        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
        </h3>
      </article>
    );
  }
}

FilmCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  }).isRequired,
  onDataChange: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};
