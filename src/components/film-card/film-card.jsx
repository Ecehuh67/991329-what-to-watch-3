import {getRandomNumber} from '../../utils/utils';
import {PureComponent} from 'react';

const MAX_COUNT_KEY_ID = 10000;

const FilmCard = (props) => {
  const {film, handler} = props;
  const {title, image} = film;
  const keyId = getRandomNumber(MAX_COUNT_KEY_ID);

  return (
    <article className="small-movie-card catalog__movies-card" key={keyId}>
      <div className="small-movie-card__image">
        <img src={image} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title" onClick={() => handler(film)}>
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

// class FilmCard extends PureComponent {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     const {film, handler} = this.props;
//     const {title, image} = film;
//     const keyId = getRandomNumber(MAX_COUNT_KEY_ID);
//
//     return (
//       <article className="small-movie-card catalog__movies-card" key={keyId}>
//         <div className="small-movie-card__image">
//           <img src={image} alt={title} width="280" height="175" />
//         </div>
//         <h3 className="small-movie-card__title" onClick={handler(film)}>
//           <a className="small-movie-card__link" href="movie-page.html">{title}</a>
//         </h3>
//       </article>
//     );
//   }
// }

FilmCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  handler: PropTypes.func.isRequired
};

export default FilmCard;
