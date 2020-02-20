import FilmCard from '../film-card/film-card';

export default class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = null;

    this._onTitleButtonHandler = this._onTitleButtonHandler.bind(this);
  }

  _onTitleButtonHandler(value) {
    const {onDataChange} = this.props;
    console.log(this.props)
    this.setState(value);
    onDataChange(value);
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => {
          return (
            <FilmCard
              film={film}
              handler={this._onTitleButtonHandler}
              key={i}
            />
          );
        })}
      </div>
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
      })
  ).isRequired,
  onDataChange: PropTypes.func.isRequired
};
