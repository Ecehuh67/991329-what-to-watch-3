import {convertTimeToProgressBar} from '../../utils/utils';

const DEFAULT_WIDTH_PROGRESS_BAR = 860;
const MAX_VALUE_PROGRESS_BAR = 100;

const VideoScreen = (props) => {
  const {film, state, onStopButtonClick, onPlayButtonClick, videoRef, onStopPlayVideo, onTimeUpdate, onCloseButtonClick, onFullScreenClick} = props;
  const duration = convertTimeToProgressBar(state.duration);
  const position = state.percent * DEFAULT_WIDTH_PROGRESS_BAR;
  const progressPosition = Math.round(state.percent * MAX_VALUE_PROGRESS_BAR);

  return (
    <div className="player">
      <video
        src={film.video_link}
        className="player__video"
        autoPlay
        onPause={onStopButtonClick}
        onPlay={onPlayButtonClick}
        ref={videoRef}
        onClick={onStopPlayVideo}
        onTimeUpdate={onTimeUpdate}
      >
      </video>

      <button
        type="button"
        className="player__exit"
        onClick={onCloseButtonClick}
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
            onClick={onStopPlayVideo}
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={!state.isPlaying ? `#play-s` : `#pause`}></use>
            </svg>
            <span>{!state.isPlaying ? `Play` : `Pause`}</span>
          </button>
          <div className="player__name">{!state.isPlaying ? `Play` : `Pause`}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={onFullScreenClick}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

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
  state: PropTypes.object.isRequired,
  onStopButtonClick: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  videoRef: PropTypes.object.isRequired,
  onStopPlayVideo: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  onCloseButtonClick: PropTypes.func.isRequired,
  onFullScreenClick: PropTypes.func.isRequired
};

export default VideoScreen;
