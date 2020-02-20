const VideoPlayer = (props) => {
  const {image, preview, title, isPlaying} = props;
  console.log(isPlaying);
  return (
    <>
    <video
    className="video-title"
    {...isPlaying ? {autoPlay: true} : {}}
    width="300"
    muted
    src={preview}
    poster={image}
    />
    </>
  );
};

export default VideoPlayer;

// export default class VideoPlayer extends React.PureComponent {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     const {image, preview, title, isPlaying} = this.props;
//
//     if (isPlaying) {
//       console.log(isPlaying)
//     }
//
//       return (
//         <video
//         className="preview-video-"
//         width="300"
//         muted
//         {...isPlaying ? {autoPlay: true} : {}}
//         src={preview}
//         poster={image}
//         />
//       );
//   }
// }
