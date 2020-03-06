const VideoPlayer = (props) => {
  const {film, isActive} = props;

  if (isActive) {
    return (
      <video
        className="video-title"
        {...isActive ? {autoPlay: true} : {}}
        width="280"
        muted
        src={film.video_link}
      />
    );
  }

  return null;
};

export default VideoPlayer;

/* eslint camelcase: ["error", {properties: "never"}] */
VideoPlayer.propTypes = {
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
  isActive: PropTypes.bool.isRequired
};
