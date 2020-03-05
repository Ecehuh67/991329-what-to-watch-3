import {ActionCreator} from "../../actions.js";
import {getSimilarFilms} from '../../utils/utils';
import {DEFAULT_GENRE} from '../../utils/consts';
import NameSpace from '../../reducer/name-space';

const mapStateToProps = (state) => {
  return {
    films: state[NameSpace.DATA].films,
    isPending: state[NameSpace.DATA].isPending,
    isUploaded: state[NameSpace.DATA].isUploaded,
    // isPopupActive: state.isPopupActive,
    // videoPlayer: state.videoPlayer,
    // activeFilmCard: state.activeFilmCard,
    // filteredFilms: getSimilarFilms(state.films, state.activeFilmCard),
    // films: (() => {
    //   if (state.chosenGenre === DEFAULT_GENRE) {
    //     return state.films.slice(0, state.showedFilms);
    //   }
    //   return state.films.slice().filter((film) => film.genre === state.chosenGenre);
    // })(),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFilmCardClick(film) {
    dispatch(ActionCreator.setActiveFIlm(film));
  },
  onPlayButtonClick(film) {
    dispatch(ActionCreator.playVideo(film));
  },
  onCloseButtonClick() {
    dispatch(ActionCreator.closeVideo());
  }
});

export {mapStateToProps, mapDispatchToProps};
