import {ActionCreator} from '../../reducer/data/actions';
import {getSimilarFilms} from '../../utils/utils';
import {DEFAULT_GENRE} from '../../utils/consts';
import NameSpace from '../../reducer/name-space';

const mapStateToProps = (state) => {
  return {
    films: (() => {
      if (state[NameSpace.DATA].chosenGenre === DEFAULT_GENRE) {
        return state[NameSpace.DATA].films.slice(0, state[NameSpace.DATA].showedFilms);
      }
      return state[NameSpace.DATA].films.slice().filter((film) => film.genre === state[NameSpace.DATA].chosenGenre);
    })(),
    isPending: state[NameSpace.DATA].isPending,
    isUploaded: state[NameSpace.DATA].isUploaded,
    isPopupActive: state[NameSpace.DATA].isPopupActive,
    filteredFilms: getSimilarFilms(state[NameSpace.DATA].films, state[NameSpace.DATA].activeFilmCard),
    activeFilmCard: (() => {
      const index = state[NameSpace.DATA].films.map((film) => film.id).indexOf(state[NameSpace.DATA].activeFilmCard);

      return state[NameSpace.DATA].films[index]
    })(),
    // videoPlayer: state.videoPlayer,
    // filteredFilms: getSimilarFilms(state.films, state.activeFilmCard),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFilmCardClick(id) {
    dispatch(ActionCreator.setActiveFilm(id));
  },
  // onPlayButtonClick(film) {
  //   dispatch(ActionCreator.playVideo(film));
  // },
  // onCloseButtonClick() {
  //   dispatch(ActionCreator.closeVideo());
  // }
});

export {mapStateToProps, mapDispatchToProps};
