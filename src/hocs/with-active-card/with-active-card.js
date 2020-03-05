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
      // const {title, image, preview} = film;
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

  WithActiveCard.propTypes = {
    film: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired
    }).isRequired,
    onDataChange: PropTypes.func.isRequired
  };

  return WithActiveCard;
};

export default withActiveCard;
