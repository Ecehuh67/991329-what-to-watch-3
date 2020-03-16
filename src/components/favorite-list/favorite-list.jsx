import FilmsList from '../films-list/films-list';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/consts';

class Favorites extends React.PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const {films, onDataChange} = this.props;

    return (
      <div class="user-page">
        <header class="page-header user-page__head">
          <div class="logo">
            <Link
              className="logo__link"
              to={AppRoute.MAIN}
            >
              <span class="logo__letter logo__letter--1">W</span>
              <span class="logo__letter logo__letter--2">T</span>
              <span class="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 class="page-title user-page__title">My list</h1>

          <div class="user-block">
            <div class="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <section class="catalog">
          <h2 class="catalog__title visually-hidden">Catalog</h2>

          <FilmsList
            films={films}
            onDataChange={onDataChange}
          />

        </section>

        <footer class="page-footer">
          <div class="logo">
            <a href="main.html" class="logo__link logo__link--light">
              <span class="logo__letter logo__letter--1">W</span>
              <span class="logo__letter logo__letter--2">T</span>
              <span class="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div class="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Favorites;
