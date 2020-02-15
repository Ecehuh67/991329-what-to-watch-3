import {PureComponent} from 'react';
import FilmCard from '../film-card/film-card';

export default class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = null;
  }

  render() {
    const {films, onTitleButtonHandler} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => {
          return (
            <FilmCard
              film={film}
              onTitleButtonHandler={onTitleButtonHandler}
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
  onTitleButtonHandler: PropTypes.func.isRequired
};
