const VideoPlayer = (props) => {
  const {image, preview, isActive} = props;

  return (
    <video
      className="video-title"
      {...isActive ? {autoPlay: true} : {}}
      width="300"
      muted
      src={preview}
      poster={image}
    />
  );
};

export default VideoPlayer;

VideoPlayer.propTypes = {
  image: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};
