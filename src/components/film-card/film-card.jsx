import {getRandomNumber} from '../../utils/utils';
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

    !this.state.isPlaying ? setTimeout(changeState, 1000) : changeState();
  }

  render() {
    const {film, handler} = this.props;
    const {title, image, preview} = film;

    return(
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image" onClick={() => handler(film)} onMouseEnter={this._onMouseChange} onMouseLeave={this._onMouseChange}>
          <VideoPlayer
            preview={preview}
            image={image}
            title={title}
            isPlaying={this.state.isPlaying}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{title}</a>
        </h3>
      </article>
    )
  }
}

FilmCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  handler: PropTypes.func.isRequired
};

export default FilmCard;
