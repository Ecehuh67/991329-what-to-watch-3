const withVideoScreen = (Component) => {
  class WithVideoScreen extends React.PureComponent {
    constructor(props) {
      super(props);

      this.videoRef = React.createRef();

      this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
      this._onStopButtonClick = this._onStopButtonClick.bind(this);
      this._onCloseButtonClick = this._onCloseButtonClick.bind(this);

      this._stopPlayVideo = this._stopPlayVideo.bind(this);
      this._onTimeUpdate = this._onTimeUpdate.bind(this);
      this._onFullScreenClick = this._onFullScreenClick.bind(this);

      this.state = {
        duration: null,
        percent: null,
        isPlaying: true, // fixing autoPlay attribute
        isStopped: false,
      };
    }

    _onCloseButtonClick() {
      const {history} = this.props;

      history.goBack();
    }

    _onStopButtonClick() {
      this.setState(
          {
            isStopped: true,
            isPlaying: false
          }
      );
    }

    _onPlayButtonClick() {
      this.setState(
          {
            isPlaying: true,
            isStopped: false
          }
      );
    }

    _onFullScreenClick() {
      this.videoRef.current.requestFullscreen();
    }

    _stopPlayVideo() {
      if (this.state.isPlaying) {
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

      return (
        <Component
          {...this.props}
          state={this.state}
          onStopButtonClick={this._onStopButtonClick}
          onPlayButtonClick={this._onPlayButtonClick}
          videoRef={this.videoRef}
          stopPlayVideo={this._stopPlayVideo}
          onTimeUpdate={this._onTimeUpdate}
          onCloseButtonClick={this._onCloseButtonClick}
          onFullScreenClick={this._onFullScreenClick}
        />
      );
    }
  }

  /* eslint camelcase: ["error", {properties: "never"}] */
  WithVideoScreen.propTypes = {
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
    history: PropTypes.func.isRequired,
  };

  return WithVideoScreen;
};

export default withVideoScreen;
