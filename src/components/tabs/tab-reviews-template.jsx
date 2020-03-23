import {getCommentDate, getAttrDate} from '../../utils/utils';

const TabReviews = (props) => {
  const {comments} = props;

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {
          comments.map((comment, i) => {
            const date = new Date(comment.date);
            const commentDate = getCommentDate(date);
            const attrTime = getAttrDate(date);

            return (
              <div className="review" key={i}>
                <blockquote className="review__quote">
                  <p className="review__text">{comment.comment}</p>

                  <footer className="review__details">
                    <cite className="review__author">{comment.user.name}</cite>
                    <time className="review__date" dateTime={attrTime}>{commentDate}</time>
                  </footer>
                </blockquote>

                <div className="review__rating">{comments.rating}</div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default TabReviews;

TabReviews.propTypes = {
  comments: PropTypes.array.isRequired
};
