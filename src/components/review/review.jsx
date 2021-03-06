import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute, MAX_RATING} from '../../utils/consts';

const Review = (props) => {
  const {film, onSubmit, state, onChangeRating, onChangeTextReview} = props;

  return (
    <section className="movie-card movie-card--full" style={{background: film.background_color}}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={film.background_image} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link
              className="logo__link"
              to={AppRoute.MAIN}
            >
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="#" className="breadcrumbs__link">{film.name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <Link
              to={AppRoute.MY_LIST}
            >
              <div className="user-block__avatar">
                <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </Link>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={film.poster_image} alt={film.name} width="218" height="327" />
        </div>
      </div>

      {
        state.isError &&
        <div className="add-review">
          <p style={{color: `#B22222`}}>
            Sorry, but your review have not been sent to server. Please, try after a few minutes
          </p>
        </div>
      }

      <div className="add-review">
        <form
          action="#"
          className="add-review__form"
          onSubmit={onSubmit}
        >
          <div className="rating">
            <div className="rating__stars">
              {
                new Array(MAX_RATING).fill(``).map((element, i) => {
                  return (
                    <React.Fragment key={i}>
                      <input
                        className="rating__input"
                        id={`star-${i}`}
                        type="radio"
                        name="rating"
                        value={i}
                        onChange={onChangeRating}
                        disabled={state.isDisabled}
                      />
                      <label
                        className="rating__label"
                        htmlFor={`star-${i}`}
                      >Rating {i}
                      </label>
                    </React.Fragment>
                  );
                })
              }
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              disabled={state.isDisabled}
              onChange={onChangeTextReview}
            >
            </textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                disabled={state.isDisabled}
              >Post
              </button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

/* eslint camelcase: ["error", {properties: "never"}] */
Review.propTypes = {
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
  onSubmit: PropTypes.func.isRequired,
  onChangeRating: PropTypes.func.isRequired,
  onChangeTextReview: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
};

export default Review;
