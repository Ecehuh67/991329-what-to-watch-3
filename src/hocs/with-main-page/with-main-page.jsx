const withMainPage = (Component) => {
  class WithMainPAge extends React.PureComponent {
    constructor(props) {
      super(props);

      this._onShowHideButtonClick = this._onShowHideButtonClick.bind(this);

      this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
      this._onStopButtonClick = this._onStopButtonClick.bind(this);

      this.state = {
        isVideoActive: false,
        isPlaying: true, // fixing autoPlay attribute
        isStopped: false
      };
    }

    _onShowHideButtonClick() {
      this.setState(
          {
            isVideoActive: !this.state.isVideoActive,
            isPlaying: !this.state.isPlaying,
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

    _onStopButtonClick() {
      this.setState(
          {
            isStopped: true,
            isPlaying: false
          }
      );
    }

    render() {

      return (
        <Component
          {...this.props}
          state={this.state}
          onPlayButtonClick={this._onPlayButtonClick}
          onStopButtonClick={this._onStopButtonClick}
          onShowHideButtonClick={this._onShowHideButtonClick}
        />
      );
    }
  }

  /* eslint camelcase: ["error", {properties: "never"}] */
  WithMainPAge.propTypes = {
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
    onDataChange: PropTypes.func.isRequired
  };

  return WithMainPAge;
};

export default withMainPage;
