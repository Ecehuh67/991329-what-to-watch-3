const withMainPage = (Component) => {
  class WithMainPAge extends React.PureComponent {
    constructor(props) {
      super(props);

      this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
      this._onCloseButtonClick = this._onCloseButtonClick.bind(this);

      this.state = {
        isPlaying: false
      };
    }

    _onPlayButtonClick() {
      this.setState({isPlaying: true});
    }

    _onCloseButtonClick() {
      this.setState({isPlaying: false});
    }

    render() {

      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          onPlayButtonClick={this._onPlayButtonClick}
          onCloseButtonClick={this._onCloseButtonClick}
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
