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

  WithMainPAge.propTypes = {
    film: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired
    }),
    films: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired
        })
    ).isRequired,
    onDataChange: PropTypes.func.isRequired
  };

  return WithMainPAge;
};

export default withMainPage;
