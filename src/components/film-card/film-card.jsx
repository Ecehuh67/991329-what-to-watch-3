import VideoPlayer from '../video-player/video-player';

export default class FilmCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.timeoutId = null;

    this.tr = 100;

    this.state = {
      isActive: false
    };

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this._onFocusChange = this._onFocusChange.bind(this);
  }

  _onFocusChange() {
    this.setState({isActive: !this.state.isActive});
  }

  _onMouseEnter() {
    this.timeoutId = setTimeout(this._onFocusChange, 1000);
  }

  _onMouseLeave() {
    clearTimeout(this.timeoutId);

    if (this.state.isActive) {
      this._onFocusChange();
    }
  }

  render() {
    const {film, onDataChange, getSimilarFilms, similarFilms} = this.props;
    const {title, image, preview} = film;

    return (
      <article className="small-movie-card catalog__movies-card">
        <div
          className="small-movie-card__image"
          onClick={() => {
            onDataChange(film);
            getSimilarFilms(similarFilms);
          }
          }
          onMouseEnter={this._onMouseEnter}
          onMouseLeave={this._onMouseLeave}
        >

          {this.state.isActive ?
            <VideoPlayer
              preview={preview}
              image={image}
              title={title}
              isActive={this.state.isActive}
            />
            :
            <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
          }
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{title}</a>
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
  getSimilarFilms: PropTypes.func.isRequired,
  similarFilms: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired
      })
  ).isRequired,
};
