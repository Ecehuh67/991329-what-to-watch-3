import VideoPlayer from '../../components/video-player/video-player';

const withActiveCard = (Component) => {
  class WithActiveCard extends React.PureComponent {
    constructor(props) {
      super(props);

      this.timeoutId = null;

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
      const {film} = this.props;
      return (
        <Component
          {...this.props}
          onMouseEnter={this._onMouseEnter}
          onMouseLeave={this._onMouseLeave}
        >
          {this.state.isActive ?
            <VideoPlayer
              film={film}
              isActive={this.state.isActive}
              onCloseButtonClick={() => {}}
            />
            :
            <img src={film.preview_image} alt={film.name} width="280" height="175" />
          }
        </Component>
      );
    }

    componentWillUnmount() {
      clearTimeout(this.timeoutId);
    }
  }

  /* eslint camelcase: ["error", {properties: "never"}] */
  WithActiveCard.propTypes = {
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
    onDataChange: PropTypes.func.isRequired
  };

  return WithActiveCard;
};

export default withActiveCard;
