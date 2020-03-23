import {AppRoute, MAX_RATING} from '../../utils/consts';

const Length = {
  MIN: 50,
  MAX: 400
};

const withReview = (Component) => {
  class WithReview extends React.PureComponent {
    constructor(props) {
      super(props);

      this._handleSubmit = this._handleSubmit.bind(this);
      this._getRating = this._getRating.bind(this);
      this._getTextReview = this._getTextReview.bind(this);
      this._validateComment = this._validateComment.bind(this);
      this._onSubmitForm = this._onSubmitForm.bind(this);
      this._onErrorHandler = this._onErrorHandler.bind(this);

      this.state = {
        rating: MAX_RATING,
        text: ``,
        isDisabled: false,
        isError: false
      };
    }

    _onSubmitForm() {
      this.setState({
        isDisabled: !this.state.isDisabled
      });
    }

    _onErrorHandler() {
      this.setState({
        isError: true
      });
    }

    _validateComment() {
      const commentLength = this.state.text.length;
      if (commentLength > Length.MIN && commentLength < Length.MAX) {
        return true;
      }

      return false;
    }

    _getRating(evt) {
      this.setState({rating: evt.target.value});
    }

    _getTextReview(evt) {
      this.setState({text: evt.target.value});
    }

    _handleSubmit(evt) {
      evt.preventDefault();

      const {onSubmit, film, history} = this.props;
      const text = this.state.text;
      const rating = this.state.rating;
      const isValid = this._validateComment();

      if (isValid) {
        this._onSubmitForm();
        onSubmit({
          id: film.id,
          rating,
          comment: text,
          submitHandler: this._onSubmitForm,
          // eslint-disable-next-line new-cap
          comeBack: history.push(AppRoute.REVIEW(film.id))
        });

        // eslint-disable-next-line new-cap
        history.push(AppRoute.FILM(film.id));
      }
    }

    render() {

      return (
        <Component
          {...this.props}
          onSubmit={this._handleSubmit}
          state={this.state}
          getRating={this._getRating}
          getTextReview={this._getTextReview}
        />
      );
    }
  }

  /* eslint camelcase: ["error", {properties: "never"}] */
  WithReview.propTypes = {
    onSubmit: PropTypes.func.isRequired,
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
    history: PropTypes.object.isRequired
  };

  return WithReview;
};

export default withReview;
