const VideoPlayer = (props) => {
  const {image, preview, isPlaying} = props;

  return (
    <video
      className="video-title"
      {...isPlaying ? {autoPlay: true} : {}}
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
  isPlaying: PropTypes.bool.isRequired
};
