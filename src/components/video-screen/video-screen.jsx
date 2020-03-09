import {convertTimeToProgressBar} from '../../utils/utils';

const DEFAULT_WIDTH_PROGRESS_BAR = 860;
const MAX_VALUE_PROGRESS_BAR = 100;

export default class VideoScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();

    this._stopPlayVideo = this._stopPlayVideo.bind(this);
    this._onTimeUpdate = this._onTimeUpdate.bind(this);

    this.state = {
      duration: null,
      percent: null
    };
  }

  _stopPlayVideo() {
    const {state} = this.props;
    if (state.isPlaying) {
      this.videoRef.current.pause();
    } else {
      this.videoRef.current.play();
    }
  }

  _onTimeUpdate({target: {currentTime, duration}}) {
    const time = Math.round(duration - currentTime);
    const percent = currentTime / duration;
    this.setState(
        {
          duration: time,
          percent
        }
    );
  }

  render() {
    const {film, state, onPlayButtonClick, onStopButtonClick, onShowHideButtonClick} = this.props;
    const duration = convertTimeToProgressBar(this.state.duration);
    const position = this.state.percent * DEFAULT_WIDTH_PROGRESS_BAR;
    const progressPosition = Math.round(this.state.percent * MAX_VALUE_PROGRESS_BAR);

    return (
      <div className="player">
        <video
          src={film.video_link}
          className="player__video"
          autoPlay
          onPause={onStopButtonClick}
          onPlay={onPlayButtonClick}
          ref={this.videoRef}
          onClick={this._stopPlayVideo}
          onTimeUpdate={this._onTimeUpdate}
        >
        </video>

        <button
          type="button"
          className="player__exit"
          onClick={
            () => {
              onShowHideButtonClick();
            }
          }
        >Exit
        </button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={progressPosition} max="100"></progress>
              <div className="player__toggler" style={{left: position}}>Toggler</div>
            </div>
            <div className="player__time-value">{duration}</div>
          </div>

          <div className="player__controls-row">
            <button
              type="button"
              className="player__play"
              onClick={this._stopPlayVideo}
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref={!state.isPlaying ? `#play-s` : `#pause`}></use>
              </svg>
              <span>{!state.isPlaying ? `Play` : `Pause`}</span>
            </button>
            <div className="player__name">{!state.isPlaying ? `Play` : `Pause`}</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

/* eslint camelcase: ["error", {properties: "never"}] */
VideoScreen.propTypes = {
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
  onPlayButtonClick: PropTypes.func.isRequired,
  onStopButtonClick: PropTypes.func.isRequired,
  onShowHideButtonClick: PropTypes.func.isRequired,
  state: PropTypes.objectOf(PropTypes.bool).isRequired
};
