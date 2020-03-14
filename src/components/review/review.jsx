import React from 'react';

const MAX_RATING = 5;

export default class Review extends React.PureComponent {
  constructor(props) {
    super(props);

    // this.textRef = React.createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
    this._getRating = this._getRating.bind(this);
    this._getTextReview = this._getTextReview.bind(this);

    this.state = {
      rating: MAX_RATING,
      text: ``
    };
  }

  _getRating(evt) {
    this.setState({rating: evt.target.value});
  }

  _getTextReview(evt) {
    this.setState({text: evt.target.value});
  }

  _handleSubmit(evt) {
    evt.preventDefault();

    const {onSubmit, film, onDataChange} = this.props;
    // const text = this.textRef.current.value;
    const text = this.state.text;
    const rating = this.state.rating;

    onSubmit({
      id: film.id,
      rating,
      comment: text
    });
    onDataChange();
  }

  render() {
    const {film} = this.props;

    return (
      <section className="movie-card movie-card--full" style={{background: film.background_color}}>
        <div className="movie-card__header">
            <div className="movie-card__bg">
            <img src={film.background_image} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
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
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={film.poster_image} alt={film.name} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form
            action="#"
            className="add-review__form"
            onSubmit={this._handleSubmit}
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
                          onChange={this._getRating}
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
                // ref={this.textRef}
                onChange={this._getTextReview}
              >
              </textarea>
              <div className="add-review__submit">
                <button
                  className="add-review__btn"
                  type="submit"
                >Post
                </button>
              </div>

            </div>
          </form>
        </div>

      </section>
    );
  }
}
