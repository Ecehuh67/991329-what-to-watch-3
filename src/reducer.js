// // import {films} from './mocks/films';
// import {DEFAULT_GENRE, DEFAULT_SHOWED_FILMS} from './utils/consts';
// import {ActionType, ActionCreator} from './actions';
// import {extend} from './utils/utils';
//
// // const extend = (a, b) => {
// //   return Object.assign({}, a, b);
// // };
//
// const initialState = {
//   chosenGenre: DEFAULT_GENRE,
//   isPopupActive: false,
//   showedFilms: DEFAULT_SHOWED_FILMS,
//   videoPlayer: {
//     isPlaying: false,
//     isStoped: false,
//   },
//   activeFilmCard: {
//     title: ``,
//     image: ``,
//     genre: ``,
//     preview: ``
//   },
//   // films,
// };
//
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ActionType.CHANGE_FILTERED_GENRE:
//       return extend(
//           state,
//           {
//             chosenGenre: action.payload,
//             showedFilms: DEFAULT_SHOWED_FILMS
//           }
//       );
//     case ActionType.SET_ACTIVE_CARD:
//       return extend(
//           state,
//           {
//             activeFilmCard: action.payload,
//             isPopupActive: true
//           }
//       );
//     case ActionType.SHOW_MORE_FILMS:
//       return extend(
//           state,
//           {
//             showedFilms: state.showedFilms + action.payload
//           }
//       );
//     case ActionType.PLAY_VIDEO:
//       return extend(
//           state,
//           {
//             videoPlayer: {
//               isPlaying: true
//             }
//           }
//       );
//     case ActionType.CLOSE_VIDEO:
//       return extend(
//           state,
//           {
//             videoPlayer: {
//               isPlaying: false
//             }
//           }
//       );
//   }
//
//   return state;
// };
//
// export {reducer, ActionType, ActionCreator};
