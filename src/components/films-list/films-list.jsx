import {PureComponent} from 'react';
import FilmCard from '../film-card/film-card';

export default class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = null;

    this._onTitleButtonHandler = this._onTitleButtonHandler.bind(this);
  }

  _onTitleButtonHandler(value) {
    this.setState(value);
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

};
