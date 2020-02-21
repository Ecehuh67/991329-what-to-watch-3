import VideoPlayer from '../video-player/video-player';

class FilmCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };

    this._onMouseChange = this._onMouseChange.bind(this);
  }

  _onMouseChange() {
    const changeState = () => this.setState({isPlaying: !this.state.isPlaying});

    if (!this.state.isPlaying) {
      setTimeout(changeState, 1000);
    } else {
      changeState();
    }
  }

  render() {
    const {film, onDataChange} = this.props;
    const {title, image, preview} = film;

    return (
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image" onClick={() => onDataChange(film)} onMouseEnter={this._onMouseChange} onMouseLeave={this._onMouseChange}>
          {this.state.isPlaying ?
            <VideoPlayer
              preview={preview}
              image={image}
              title={title}
              isPlaying={this.state.isPlaying}
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
  onDataChange: PropTypes.func.isRequired
};

export default FilmCard;
