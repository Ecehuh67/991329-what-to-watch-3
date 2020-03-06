class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    }
  }

  render() {
    const {film, isActive, onCloseButtonClick} = this.props;

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

    // if (videoPlayer.isPlaying) {
    //   return (
    //     <div className="player">
    //       <video
    //         src={film.video_link}
    //         className="player__video"
    //         autoPlay
    //         controls
    //       >
    //       </video>
    //
    //       <button
    //         type="button"
    //         className="player__exit"
    //         onClick={
    //           () => {
    //             onCloseButtonClick();
    //           }
    //         }
    //       >Exit
    //       </button>
    //
    //       <div className="player__controls">
    //         <div className="player__controls-row">
    //           <div className="player__time">
    //             <progress className="player__progress" value="30" max="100"></progress>
    //             <div className="player__toggler" style={{left: 30}}>Toggler</div>
    //           </div>
    //           <div className="player__time-value">1:30:29</div>
    //         </div>
    //
    //         <div className="player__controls-row">
    //           <button type="button" className="player__play">
    //             <svg viewBox="0 0 19 19" width="19" height="19">
    //               <use xlinkHref="#play-s"></use>
    //             </svg>
    //             <span>Play</span>
    //           </button>
    //           <div className="player__name">Transpotting</div>
    //
    //           <button type="button" className="player__full-screen">
    //             <svg viewBox="0 0 27 27" width="27" height="27">
    //               <use xlinkHref="#full-screen"></use>
    //             </svg>
    //             <span>Full screen</span>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // }
  }
}

// const VideoPlayer = (props) => {
//   const {film, isActive, videoPlayer, onCloseButtonClick} = props;
//
//   if (isActive) {
//     return (
//       <video
//         className="video-title"
//         {...isActive ? {autoPlay: true} : {}}
//         width="300"
//         muted
//         src={film.preview}
//         poster={film.image}
//       />
//     );
//   }
//
//   if (videoPlayer.isPlaying) {
//     return (
//       <div className="player">
//         <video
//           src={film.preview}
//           className="player__video"
//           poster={film.image}
//           autoPlay
//           controls
//         >
//         </video>
//
//         <button
//           type="button"
//           className="player__exit"
//           onClick={
//             () => {
//               onCloseButtonClick();
//             }
//           }
//         >Exit
//         </button>
//
//         <div className="player__controls">
//           <div className="player__controls-row">
//             <div className="player__time">
//               <progress className="player__progress" value="30" max="100"></progress>
//               <div className="player__toggler" style={{left: 30}}>Toggler</div>
//             </div>
//             <div className="player__time-value">1:30:29</div>
//           </div>
//
//           <div className="player__controls-row">
//             <button type="button" className="player__play">
//               <svg viewBox="0 0 19 19" width="19" height="19">
//                 <use xlinkHref="#play-s"></use>
//               </svg>
//               <span>Play</span>
//             </button>
//             <div className="player__name">Transpotting</div>
//
//             <button type="button" className="player__full-screen">
//               <svg viewBox="0 0 27 27" width="27" height="27">
//                 <use xlinkHref="#full-screen"></use>
//               </svg>
//               <span>Full screen</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
//
//   return null;
// };

export default VideoPlayer;

VideoPlayer.propTypes = {
  film: PropTypes.shape({
    image: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  }),
  isActive: PropTypes.bool,
  onCloseButtonClick: PropTypes.func.isRequired,
  videoPlayer: PropTypes.shape({
    isPlaying: PropTypes.bool.isRequired
  })
};
